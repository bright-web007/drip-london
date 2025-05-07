import Block11 from '@/blocks/Block11/Block11';
import Block12 from '@/blocks/Block12/Block12';
import Block13 from '@/blocks/Block13/Block13';
import Block14 from '@/blocks/Block14/Block14';
import React from 'react';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `Menu | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(Meta_Tags.siteUrl || 'https://driplondon.wazobia.uk'),
  openGraph: {
    title: `Menu | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/menu`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Menu`,
      },
    ],
    type: 'website',
  },
};

const Menu = () => {
  return (
    <>
      <Block11 />
      <Block12 />
      <Block13 />
      <Block14 />
    </>
  );
};

export default Menu;
