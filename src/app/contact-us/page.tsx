import Block15 from '@/blocks/Block15/Block15';
import Block16 from '@/blocks/Block16/Block16';
import Block17 from '@/blocks/Block17/Block17';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `Contact Us | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  openGraph: {
    title: `Contact Us | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `${Meta_Tags.siteUrl}/Contact`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} contact`,
      },
    ],
    type: 'website',
  },
};

import React from 'react';

const page = () => {
  return (
    <div>
      <Block15 />
      <Block16 />
      <Block17 />
    </div>
  );
};

export default page;
