'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const Block11 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll to #faq if present in the URL hash
    if (window.location.hash === '#menu') {
      const el = document.getElementById('menu');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <div className="relative w-full h-[646px] overflow-hidden mt-[-72px] " id="menu">
      <Image
        src="https://drip-london1.s3.eu-north-1.amazonaws.com/menu-bg.webp"
        alt="Menu"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        fill
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px] bg-black/40">
        <h1 className="font-thankslabs text-center text-[55px] leading-11 md:leading-14 font-bold md:text-[70px] xl:text-[80px] text-white mx-4 md:mx-0">
          MENUS
        </h1>
        <hr className="w-[56.08px] h-[3px] border-3 border-[#898155] mt-[20px] md:w-[80px]" />
        <p className="text-[20px] font-monserrat text-white md:text-[24px]  xl:text-[24px]">
          Welcome to Flavour.
        </p>
      </div>

      {/* Scroll Arrow */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer  xl:bottom-7 w-[32px] h-[32px]  md:w-[32px] md:h-[32px]"
        onClick={handleScroll}
      >
        <Image
          src="https://drip-london1.s3.eu-north-1.amazonaws.com/arrow-down.webp"
          alt="arrow down icon"
          fill
          className="w-[32px] h-[32px]  md:w-[32px] md:h-[32px]  animate-bounce"
        />
      </div>
      <div className="h-[55px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
    </div>
  );
};

export default Block11;
