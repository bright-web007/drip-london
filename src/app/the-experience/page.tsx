import React from 'react';
import Block23 from '@/blocks/Block23/Block23';
import Block24 from '@/blocks/Block24/Block24';
import Block29 from '@/blocks/Block29/Block29';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `The-Experience | ${Meta_Tags.siteName}`,
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
    title: `The-Experience | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/the-experience`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} The-Experience`,
      },
    ],
    type: 'website',
  },
};

const faq = () => {
  return (
    <div>
      <Block23 />
      <Block29 />
      <Block24 />
    </div>
  );
};

export default faq;
