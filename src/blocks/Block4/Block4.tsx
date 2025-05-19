'use client';
import { useState } from 'react';
import Image from 'next/image';
import { dits } from '@/helpers/data';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = dits.length;

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black py-[100px] px-6 w-full h-full relative overflow-hidden">
      <h2 className="text-white text-[18px] font-thankslabs mb-[30px] text-center">
        A Glimpse of Drip
      </h2>

      <div className="">
        <div className="flex justify-center items-center w-full">
          {/* Slide with buttons positioned relative to it */}
          <div className="relative">
            {/* Slide Image */}
            <div className="w-full h-[349px] bg-black border border-[#1D1D1D] rounded-lg text-white">
              <Image
                src={dits[current].img}
                alt="food card"
                className="rounded-md mb-[34px] h-full  w-[382px] object-cover"
              />
            </div>

            {/* Conditionally show Left Toggle */}
            {current !== 0 && (
              <button
                onClick={prevSlide}
                className="absolute left-[16px] top-1/2 -translate-y-1/2 bg-[#898155] border border-[#898155] text-white px-3 py-2 rounded-full z-10"
              >
                ‹
              </button>
            )}

            {/* Conditionally show Right Toggle */}
            {current !== length - 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 bg-[#898155] border border-[#898155] text-white px-3 py-2 rounded-full z-10"
              >
                ›
              </button>
            )}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 bg-[#302e2e] py-[12px] w-full">
          {dits.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? 'bg-[white]' : 'bg-[#898155]/30'
              } transition-all`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
