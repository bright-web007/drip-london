import React from 'react';
import Block19 from '@/blocks/Block19/Block19';
import Block20 from '@/blocks/Block20/Block20';
import Block14 from '@/blocks/Block14/Block14';
import Block28 from '@/blocks/Block28/Block28';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `News | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  openGraph: {
    title: `News | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/news`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} News`,
      },
    ],
    type: 'website',
  },
};

const news = () => {
  return (
    <div>
      <Block19 />
      <Block20 />
      <Block14 />
      <Block28 />
    </div>
  );
};

export default news;
