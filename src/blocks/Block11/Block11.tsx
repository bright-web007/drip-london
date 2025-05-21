import React from 'react';
import Image from 'next/image';
import menuBg from '@/assets/background/menu-bg.jpg';

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
      <div className="absolute inset-0  flex flex-col items-center justify-center gap-[20px]">
        <h1 className="font-thankslabs text-center text-[41.77px]  leading-11 md:leading-14 font-bold md:text-[32px] xl:text-[50px] text-[white] mx-4 md:mx-0">
        MENUS
        </h1>
        <hr className="w-[56.08px] h-[1px] border-1 border-[#898155]"></hr>
        <p className="text-[16px] font-monserrat text-[white]">Welcome to Flavour.</p>
      </div>
    </div>
  );
};

export default Block11;
