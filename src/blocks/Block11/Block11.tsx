import React from 'react';
import Image from 'next/image';
import menuBg from '@/assets/background/menu-bg.webp';

const Block11 = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[-72px]">
      <Image
        src={menuBg}
        alt="Menu"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        width={400}
        height={400}
      />
      <div className="absolute inset-0  flex items-center justify-center ">
        <h1 className="font-thankslabs text-center leading-11 md:leading-14 font-bold text-2xl md:text-[32px] xl:text-[50px] text-white mx-4 md:mx-0">
          Enjoy a Delicious Meal
        </h1>
      </div>
    </div>
  );
};

export default Block11;
