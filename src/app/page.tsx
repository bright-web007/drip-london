import Block1 from '@/blocks/Block1/Block1';
import Block2 from '@/blocks/Block2/Block2';
import Block3 from '@/blocks/Block3/Block3';
import Block4 from '@/blocks/Block4/Block4';
import logo from '@/assets/logo.svg';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';

export const metadata: Metadata = {
  title: `Home | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  robots: {
    index: false, // hide from Google
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: `Home | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Home`,
      },
    ],
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>
  );
}
