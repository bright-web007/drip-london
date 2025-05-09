import React from 'react';
import Image from 'next/image';
import faqbg from '@/assets/background/faq-bg.png';

const Block23 = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[-72px]">
      <Image
        src={faqbg}
        alt="contact background"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />

      <div className="absolute inset-0  flex items-center justify-center ">
        <h1 className="font-thankslabs text-center leading-11 md:leading-14 font-bold text-2xl md:text-[32px] xl:text-[50px] text-white mx-4 md:mx-0">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
  );
};

export default Block23;
