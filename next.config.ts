import type { NextConfig } from 'next';
import './env';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    // Provide the placeholder for build time
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://placeholder-for-build-time.com',
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'drip-london1.s3.eu-north-1.amazonaws.com'],
  },
};

export default nextConfig;
