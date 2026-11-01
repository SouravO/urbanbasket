import { NextRequest, NextResponse } from 'next/server';
import { EnquirySchema } from '@/lib/validation';
import { saveEnquiry } from '@/lib/db';

const MAX_PAYLOAD_BYTES = 4096; // ~4KB limit

export async function POST(request: NextRequest) {
  try {
    // 1. Validate request origin / host for same-origin browser submissions
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          return NextResponse.json(
            { ok: false, error: 'Cross-origin submission rejected.' },
            { status: 403 }
          );
        }
      } catch {
        // Invalid origin URL format
      }
    }

    // 2. Enforce payload size limit
    const rawText = await request.text();
    const byteLength = Buffer.byteLength(rawText, 'utf8');
    if (byteLength > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { ok: false, error: 'Request payload exceeds allowable limit.' },
        { status: 413 }
      );
    }

    // 3. Parse JSON
    let body: unknown;
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON payload.' },
        { status: 400 }
      );
    }

    // 4. Validate with Zod schema
    const validationResult = EnquirySchema.safeParse(body);
    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0];
      return NextResponse.json(
        {
          ok: false,
          error: firstIssue?.message || 'Invalid form submission.',
          issues: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const { id, name, phone, business, city, role, consent } = validationResult.data;

    // 5. Attempt durable database insertion
    const result = await saveEnquiry({
      id,
      name,
      phone,
      business,
      city,
      role,
      consent,
    });

    return NextResponse.json(
      {
        ok: true,
        reference: result.reference,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    
    if (err?.code === 'DATABASE_NOT_CONFIGURED') {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Database service is currently unconfigured. Set DATABASE_URL in .env.local to persist partner enquiries.',
        },
        { status: 503 }
      );
    }

    console.error('Error handling partner enquiry:', error);

    return NextResponse.json(
      {
        ok: false,
        error:
          'We were unable to save your enquiry at this moment. Please check your connection and try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed.' },
    { status: 405 }
  );
}
