'use client';

import React, { useState, useEffect } from 'react';
import { faqreview } from '@/helpers/data';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  title: string;
  review: string;
}

const Block24 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to #faq if present in the URL hash
    if (window.location.hash === '#faq') {
      const el = document.getElementById('faq');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Delay to ensure DOM is ready
      }
    }
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatReview = (item: FAQItem) => {
    if (item.title === 'How many people can I book for?') {
      return (
        <p className="text-[#D3D3D3] font-monserrat mt-4 text-[16px] leading-[24px]  sm:text-[15px] xl:text-[14px] sm:leading-[32px]">
          Restaurant bookings can be made online for up to 12 people, for bookings larger than 12
          please email{' '}
          <a
            href="mailto:reservations@drip.london"
            className="text-[#898155] underline hover:opacity-80"
          >
            reservations@drip.london
          </a>
        </p>
      );
    }

    if (item.title === 'Opening Hours?') {
      return (
        <div className="text-[#D3D3D3] font-monserrat mt-4 text-[16px] leading-[24px] sm:text-[15px] xl:text-[14px] sm:leading-[32px] space-y-1">
          <p>
            <span className="text-[#898155]">Thursday</span>
            <br />
            <span className="text-[#D5D5D5]">18:30 – 00:30</span>
          </p>
          <p>
            <span className="text-[#898155]">Friday, Saturday and Sunday</span>
            <br />
            <span className="text-[#D5D5D5]">18:30 – 02:30</span>
          </p>
        </div>
      );
    }

    if (item.title === 'Late Cancellation Policy') {
      const [firstPart, secondPart] = item.review.split('Your table will be held');
      return (
        <div className="text-[#D5D5D5] font-monserrat mt-4 text-[16px] leading-[24px]  sm:text-[15px] xl:text-[14px]">
          <p>{firstPart.trim()}</p>
          <p className="mt-4">Your table will be held {secondPart.trim()}</p>
        </div>
      );
    }

    return (
      <p className="text-[#D3D3D3] font-monserrat mt-4 text-[16px] leading-[24px]  sm:text-[15px] xl:text-[14px]">
        {item.review}
      </p>
    );
  };

  return (
    <div
      className="bg-black px-6 sm:px-[34px] md:px-12 xl:px-[120px] pb-[130px] sm:pt-[50px] sm:pb-[200px] text-white font-thankslabs"
      id="faq"
    >
      <h2 className="text-[#D5D5D5] text-[18px] mb-[30px] text-center leading-[35px] font-normal sm:text-[30px] sm:mb-[33px] sm:leading-[55px]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqreview.map((item: FAQItem, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4 pt-2">
                <div className="w-[2px] h-[100%] bg-white" />
                <div className="h-[6px]" />
                <div className="w-[15px] h-[15px] bg-[#C7B869] rounded-full" />
                <div className="h-[6px]" />
                {isOpen && <div className="w-[2px] h-[100%] bg-white" />}
              </div>

              <div className="flex-1 bg-[#1A1A1A] h-[100%] border border-[#3D3D3D] rounded-lg p-6 transition-all duration-300 sm:p-[30px] ">
                <div
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-start cursor-pointer"
                >
                  <p className="text-[12px] text-[#D5D5D5] font-normal sm:text-[15px] xl:text-[16px] pr-4 leading-[26px]">
                    {item.title}
                  </p>
                  <FaChevronDown
                    className={`text-white mt-1 h-[20px] w-[20px] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && formatReview(item)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Block24;
