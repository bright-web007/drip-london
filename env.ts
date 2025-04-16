import { z } from 'zod';

// Define schema
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

// Validate environment
const _env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

const parsed = envSchema.safeParse(_env);

if (!parsed.success) {
  throw new Error('Invalid or missing environment variables');
}
