import logo from '@/assets/logo.svg';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';
import Block21 from '@/blocks/Block21/Block21';

export const metadata: Metadata = {
  title: `Navigation | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  openGraph: {
    title: `Navigation | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/navigation`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Navigation`,
      },
    ],
    type: 'website',
  },
};
const page = () => {
  return (
    <div>
      <Block21 />
    </div>
  );
};

export default page;
