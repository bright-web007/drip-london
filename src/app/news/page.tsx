import React from 'react';
import Block19 from '@/blocks/Block19/Block19';
import Block20 from '@/blocks/Block20/Block20';
import Block14 from '@/blocks/Block14/Block14';
import { latestNews } from '@/helpers/data';
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
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start place-items-center gap-x-[25.2055px] gap-y-[25px] mx-auto w-[90%] xl:w-[75%] 2xl:w-[70%] py-16 xl:py-20">
          {latestNews.map((item, index) => (
            <Block20
              key={index}
              image={item.image}
              date={item.date}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
        <Block14 />
      </div>
    </div>
  );
};

export default news;
