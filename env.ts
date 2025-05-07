// env.ts
import { z } from 'zod';

// Define schema
const envSchema = z.object({
  // Make API URL optional during build time
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
});

// Validate environment
const _env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 
    // Default value for build time (can be a placeholder)
    'http://placeholder-for-build-time.com',
};

const parsed = envSchema.safeParse(_env);

if (!parsed.success) {
  console.error('Environment validation failed:', parsed.error.format());
  throw new Error('Invalid or missing environment variables');
}

// Export validated variables
export const env = _env as z.infer<typeof envSchema>;