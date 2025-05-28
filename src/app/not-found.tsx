import React from 'react';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';

export const metadata: Metadata = {
  title: `Not Found | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
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

const page = () => {
  return (
    <div className=" bg-[#afa4a4] w-full h-[70vh]  mt-[-72px] flex items-center justify-center ">
      <div className="bg-[white] border-4 shadow-lg border-[white] h-[50%] w-[50%] flex flex-col justify-center  place-items-center ">
        <h1 className="font-thankslabs  text-[70px]  text-beige-500  md:text-[80px]   lg:text-[85px]   xl:text-[95px]">
          404
        </h1>

        <p className="font-thankslabs  text-[10px]  text-beige-500 mb-[10px]   md:text-[15px]    xl:text-[10px]">
          - NOT FOUND -
        </p>

        <Link
          href="/"
          className="px-4 py-2 border-2  bg-beige-500 text-[white] rounded-md hover:bg-beige-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default page;
