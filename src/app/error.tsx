'use client';


import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `Error | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(Meta_Tags.siteUrl || 'https://driplondon.wazobia.uk'),
  
  openGraph: {
    title: `Error | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/error`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Error`,
      },
    ],
    type: 'website',
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-6">Please try again or contact support if the problem persists.</p>
      <p>{error?.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
