'use client';

import React from 'react';
import Image from 'next/image';
import menuBg from '@/assets/background/menu-bg.jpg';
import arrowdown from '@/assets/icons-svg/arrow-down.svg';

const Block11 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[646px] overflow-hidden mt-[-72px] ">
      <Image
        src={menuBg}
        alt="Menu"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        fill
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px]">
        <h1 className="font-thankslabs text-center text-[41.77px] leading-11 md:leading-14 font-bold md:text-[60px] xl:text-[80px] text-white mx-4 md:mx-0">
          MENUS
        </h1>
        <hr className="w-[56.08px] h-[3px] border-3 border-[#898155] mt-[20px] md:w-[80px]" />
        <p className="text-[16px] font-monserrat text-white md:text-[20px]  xl:text-[24px]">
          Welcome to Flavour.
        </p>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <button onClick={handleScroll} aria-label="Scroll to next section">
          <Image
            src={arrowdown}
            alt="Scroll down"
            className="w-[24px] h-[24px]  sm:w-[45px] sm:h-[45px]  md:w-[55px] md:h-[55px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Block11;
