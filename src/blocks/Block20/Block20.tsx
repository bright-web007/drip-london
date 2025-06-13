'use client';
import React, { useEffect } from 'react';
import { proof } from '@/helpers/data';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block20 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section
      className="py-12 px-6 sm:px-17 md:px-[157px] lg:px-[280px] xl:px-[200px] bg-black text-white font-thankslabs"
      id="next"
    >
      <h2
        className="text-center text-[#D5D5D5] text-[18px] flex flex-col mt-[33px] mb-[33px] leading-[28px] font-normal sm:text-[24px] lg:text-[32px] sm:leading-[37px] md:mb-[56px] xl:leading-[44px] xl:md:mb-[46px]"
        data-aos="custom-fade-in"
        data-aos-delay="300"
      >
        <span>Elevated</span>
        <span>Dining Experiences</span>
      </h2>

      <div className="grid gap-[33px] xl:grid-cols-2 md:gap-[45px] xl:gap-[35px]">
        {proof.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-[4px]"
            data-aos="custom-fade-in"
            data-aos-delay={300 + index * 600}
          >
            <div className="w-full h-[264px] relative">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
              <div className="h-[55px] w-full border-2 border-[black] absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[15.75px] bg-[black]"></div>
            </div>

            <div className="px-[16px] py-[16px] bg-[rgba(137,129,85,0.15)] z-10 sm:py-[22px]">
              <h3 className="text-[14px] font-thankslabs text-[#D5D5D5] font-light leading-[35px] sm:text-[20px] sm:leading-[40px] md:leading-[35px]">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#A5A5A5] font-monserrat leading-[17px] font-normal sm:text-[16px] sm:leading-[25px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Block20;
