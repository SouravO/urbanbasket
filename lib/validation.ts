import { z } from 'zod';

export const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

export function normalizePhone(raw: string): string {
  if (!raw) return '';
  // Remove all whitespace, hyphens, parentheses, and dots
  let cleaned = raw.replace(/[\s\-\(\)\.]/g, '');

  // Strip leading +91 or 91 if full 12 digits
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }

  return cleaned;
}

export const EnquirySchema = z.object({
  id: z.string().uuid({ message: 'Invalid submission UUID' }),
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(100, { message: 'Name cannot exceed 100 characters' }),
  phone: z
    .string()
    .transform((val) => normalizePhone(val))
    .refine((val) => INDIAN_PHONE_REGEX.test(val), {
      message: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)',
    }),
  business: z
    .string()
    .trim()
    .max(160, { message: 'Business name cannot exceed 160 characters' })
    .optional()
    .nullable()
    .transform((val) => (val && val.length > 0 ? val : null)),
  city: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your city (at least 2 characters)' })
    .max(100, { message: 'City cannot exceed 100 characters' }),
  role: z.enum(['store-owner', 'new-store', 'supplier'] as const, {
    message: 'Please select a valid partnership interest',
  }),
  consent: z.literal(true, {
    message: 'Please check the box to agree to be contacted',
  }),
  website: z
    .string()
    .max(0, { message: 'Bot detected' })
    .optional()
    .nullable(),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;
