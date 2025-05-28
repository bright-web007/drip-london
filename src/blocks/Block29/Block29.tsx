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
            className={`flex flex-col xl:items-center gap-[40px] px-[25px] sm:px-[40px] xl:px-[80px] w-full ${
              index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
            }`}
          >
            {/* Image section */}
            <div className="relative w-full h-[525px] md:h-[645px] xl:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="object-contain"
              />
              <div className="h-[55px] w-[4334px] border-2 border-black absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-black"></div>
            </div>

            {/* Text section - vertically centered */}
            <div className="flex flex-col gap-[4px] sm:gap-[8px] xl:w-1/2 self-center">
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
