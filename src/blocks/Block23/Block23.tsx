'use client';

import React from 'react';
import Image from 'next/image';
import experience from '@/assets/background/Experience-bg.jpg';
import arrowdown from '@/assets/icons-svg/arrow-down.svg';

const Block19 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[646px] overflow-hidden mt-[-72px] sm:h-[780px] ">
      <Image
        src={experience}
        alt="Menu"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        fill
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px] bg-black/40">
        <h1 className="font-thankslabs text-center text-[41.77px] leading-[58px] font-bold sm:text-[55px] sm:leading-[75px] md:text-[70px] xl:text-[80px] xl:leading-[120px] text-white mx-4 md:mx-0  md:w-[590px] md:leading-[95px]">
           THE EXPERIENCE
        </h1>
        <hr className="w-[56.08px]  border-1 border-[#898155] my-[20px] md:w-[80px]  md:border-3 md:my-[20px]" />
        <p className="text-[16px] w-[292px] text-center font-monserrat text-white sm:text-[20px] sm:w-[380px] md:text-[24px] md:w-[590px]  xl:text-[24px]">
          Drip is a vibe – not just a restaurant.
        </p>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <button onClick={handleScroll} aria-label="Scroll to next section">
          <Image
            src={arrowdown}
            alt="Scroll down"
            className="w-[24px] h-[24px]  sm:w-[45px] sm:h-[45px]  md:w-[40px] md:h-[40px] animate-bounce"
          />
        </button>
      </div>
      <div className="h-[55px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
    </div>
  );
};

export default Block19;