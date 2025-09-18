'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { late } from '@/helpers/data';

const Block28 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      offset: 50,
    });
  }, []);

  return (
    <section className="pt-[52px] pb-[150px] px-6 bg-black xl:px-15">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 place-items-center">
        {late.map((item, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center text-center gap-4"
            data-aos="custom-fade-in"
            data-aos-delay={index * 150}
          >
            {/* Image + Title grouped */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-[60px] h-[60px] relative mb-4 sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px] md:mb-[12px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  unselectable="on"
                />
              </div>
              <h3 className="text-[16px] leading-[22px] text-[#D5D5D5] font-monserrat font-normal sm:text-[18px] sm:leading-[25px] md:text-[20px] xl:text-[16px]">
                {item.title}
              </h3>
            </div>

            {/* HR Line — only if not the last item */}
            {index !== late.length - 1 && (
              <div className="mt-[24px] xl:mt-0 xl:mx-2">
                <hr className="w-[56.08px] border-1 border-[rgba(137,129,85,0.19)]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Block28;
