import React from 'react';
import Image from 'next/image';
import { experience } from '@/helpers/data';

const Block29 = () => {
  return (
    <section className="flex flex-col gap-[100px] py-[77px] bg-black" id="next">
      {experience.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Title stays centered on top */}
          <h2 className="text-[18px] text-[#D5D5D5] text-center font-thankslabs font-normal leading-[35px] mb-[30px] px-[20px] sm:text-[24px] sm:px-[80px] sm:mb-[40px] sm:leading-[40px]">
            {item.title}
          </h2>

          {/* Flex container with alternating direction and vertical centering */}
          <div
            className={`flex flex-col xl:items-center gap-[40px] w-full ${
              index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
            }`}
          >
            {/* Image with inner shadow */}
            <div className="w-full xl:w-[976px] mb-1 xl:mb-0">
              {item.image && (
                <div
                  className="relative h-[432px] md:h-[693px] xl:h-[693px] w-full rounded overflow-hidden"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)' }} // Inner shadow
                >
                  <div className="h-[432px] w-[4334px] border-2 border-[black]  absolute top-[2px] left-1/2 transform -translate-x-1/2 blur-[14.75px] bg-[black]"></div>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  {/* Bottom Blur */}
                  <div className="h-[70px] w-[4334px] border-2 border-[black]  absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
                  {/* Top Blur */}
                  <div className="hidden h-[57px] w-[4334px] absolute top-[-20px] left-0 blur-[11.75px] transform -translate-x-1/2 bg-black  md:flex"></div>
                  {/* Left Blur */}
                  <div className="hidden w-[50px] h-full absolute top-0 left-0 blur-[11.75px] bg-black transform -translate-x-1/2 xl:flex"></div>

                  {/* Right Blur */}
                  <div className="hidden w-[50px] h-full absolute top-0 right-[-45px] blur-[11.75px] bg-black transform -translate-x-1/2 xl:flex"></div>
                </div>
              )}
            </div>

            {/* Text section - vertically centered */}
            <div className="flex flex-col gap-[4px] sm:gap-[8px] px-[20px] xl:w-1/2 self-center  sm:px-[26px]">
              <h3 className="text-[12px] font-normal uppercase text-[#898155] leading-[22px] font-monserrat sm:text-[15px] md:text-[16px]">
                {item.subtitle}
              </h3>
              <p className="text-[#D5D5D5] text-[16px] leading-[22px] font-monserrat font-normal sm:text-[20px] sm:leading-[25px] lg:leading-[28px]">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Block29;
