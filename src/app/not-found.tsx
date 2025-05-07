import Link from 'next/link';
import logo from '@/assets/logo.svg';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';



export const metadata: Metadata = {
  title: `Not Found | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(Meta_Tags.siteUrl || 'https://driplondon.wazobia.uk'),
  openGraph: {
    title: `Not Found | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/404`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Not Found`,
      },
    ],
    type: 'website',
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
