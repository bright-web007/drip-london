import type { Metadata } from 'next';
import Block7 from '@/blocks/Block7/Block7';
import Block8 from '@/blocks/Block8/Block8';
import Block9 from '@/blocks/Block9/Block9';
import Block10 from '@/blocks/Block10/Block10';
import Block6 from '@/blocks/Block6/Block6';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';

export const metadata: Metadata = {
  title: `About Us | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(Meta_Tags.siteUrl || 'https://driplondon.wazobia.uk'),
  openGraph: {
    title: `About Us | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/about`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} About Us`,
      },
    ],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <Block6 />
    </>
  );
}
