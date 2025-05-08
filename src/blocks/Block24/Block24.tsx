'use client';

import React, { useState } from 'react';
import { faqreview } from '@/helpers/data';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  title: string;
  review: string;
}

const Block24 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  className="pr-[24px] pl-[24px] pt-[36px] pb-[60px]   md:pr-[70px] md:pl-[70px] md:pt-[50px] md:pb-[60px]   xl:pr-[120px] xl:pl-[120px] xl:pt-[70px] xl:pb-[70px]">
    <div className="bg-[#F4F1E1] p-[24px] ">
      {faqreview.map((item: FAQItem, index: number) => {
        const isOpen = openIndex === index;

        return (
        
          <div
            key={index}
            className={`mb-6 md:mb-8 p-4 rounded transition-all duration-300
              ${isOpen ? 'bg-[#F4F1E1] border border-[#898155]' : 'bg-[rgba(199,184,105,0.07)]'}
            `}
          >
            <div
              className="flex justify-between items-center gap-x-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <p className="text-[14px] text-[#898155] font-bold font-thankslabs leading-6   md:text-[18px]  xl:text-[20px]">
                {item.title}
              </p>

              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${isOpen ? 'bg-[#898155]' : 'bg-[#EFEBD5] border-[1px] border-[#898155]'} text-white transition-colors duration-300`}
              >
                {isOpen ? <FaChevronDown /> : <FaChevronRight />}
              </button>
            </div>

            {isOpen && (
              <p className="text-[12px] text-[#6D6D6D] font-monserrat mt-2  md:text-[16px]  xl:text-[18px]">
                {item.review}
              </p>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Block24;
