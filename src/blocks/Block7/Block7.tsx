import React from 'react';
import Image from 'next/image';
import aboutBg from '@/assets/background/about-bg.svg';

const Block7 = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[-72px]">
      <Image
        src={aboutBg}
        alt="About us"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        width={400}
        height={400}
      />
      <div className="absolute inset-0  flex items-center justify-center ">
        <h1 className="font-thankslabs font-bold text-2xl md:text-[32px] xl:text-[50px] text-white">
          Savour Every Taste
        </h1>
      </div>
    </div>
  );
};

export default Block7;
