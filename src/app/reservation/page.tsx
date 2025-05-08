import Block22 from '@/blocks/Block22/Block22';
import { Meta_Tags } from '@/helpers/data';
import logo from '@/assets/logo.svg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Reservation | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  openGraph: {
    title: `Reservation | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/reservation`,
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

const Reservation = () => {
  return (
    <div>
      <Block22 />
    </div>
  );
};

export default Reservation;
