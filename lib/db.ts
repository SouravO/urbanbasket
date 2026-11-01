import { Pool } from 'pg';

let pool: Pool | null = null;

export function getDbPool(): Pool | null {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  if (!pool) {
    const isLocalhost =
      process.env.DATABASE_URL.includes('localhost') ||
      process.env.DATABASE_URL.includes('127.0.0.1');

    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.DATABASE_SSL === 'false' || isLocalhost
          ? false
          : { rejectUnauthorized: false },
      connectionTimeoutMillis: 5000,
      max: 10,
    });
  }
  return pool;
}

export function generateReference(id: string): string {
  const clean = id.replace(/[^a-zA-Z0-9]/g, '').slice(0, 8).toUpperCase();
  return `HS-${clean}`;
}

export interface SaveEnquiryParams {
  id: string;
  name: string;
  phone: string;
  business?: string | null;
  city: string;
  role: string;
  consent: boolean;
}

export async function saveEnquiry(
  params: SaveEnquiryParams
): Promise<{ ok: boolean; reference: string; alreadyExisted: boolean }> {
  const db = getDbPool();
  if (!db) {
    const err = new Error('DATABASE_NOT_CONFIGURED');
    (err as unknown as { code: string }).code = 'DATABASE_NOT_CONFIGURED';
    throw err;
  }

  const reference = generateReference(params.id);

  // Idempotent insertion using ON CONFLICT (id) DO NOTHING
  const query = `
    INSERT INTO partner_enquiries (id, name, phone, business, city, role, consent, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
    ON CONFLICT (id) DO NOTHING
    RETURNING id;
  `;

  const values = [
    params.id,
    params.name,
    params.phone,
    params.business ?? null,
    params.city,
    params.role,
    params.consent,
  ];

  const result = await db.query(query, values);

  if (result.rowCount === 0) {
    // Already existed with this UUID
    return { ok: true, reference, alreadyExisted: true };
  }

  return { ok: true, reference, alreadyExisted: false };
}
