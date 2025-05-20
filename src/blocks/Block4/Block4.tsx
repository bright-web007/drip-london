'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { dits } from '@/helpers/data';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = dits.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -398, behavior: 'smooth' });
      }
      setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      if (current > 0) setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 398, behavior: 'smooth' });
      }
      setCurrent((prev) => (prev < length - 1 ? prev + 1 : prev));
    } else {
      if (current < length - 1) setCurrent((prev) => prev + 1);
    }
  };

  const handleImageClick = (index: number) => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        const scrollLeft = index * 398;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
      setCurrent(index);
    } else {
      setCurrent(index);
    }
  };

  return (
    <section className="bg-black py-[100px] px-6 w-full h-full relative overflow-hidden">
      <h2 className="text-white text-[18px] font-thankslabs mb-[30px] text-center sm:text-[20px] md:text-[24px] md:mb-[58px]">
        A Glimpse of Drip
      </h2>

      {/* Small screens */}
      <div className="relative md:hidden">
        <div className="w-full h-[349px] bg-black border border-[#1D1D1D] rounded-lg text-white flex justify-center items-center">
          <Image
            src={dits[current].img}
            alt="food card"
            className="rounded-md mb-[34px] h-full w-[382px] object-cover sm:w-[570px]"
            unselectable="on"
          />
        </div>

        {/* Toggles */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`bg-[#898155] border border-[#898155] text-white px-3 py-2 rounded-full z-10 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`bg-[#898155] border border-[#898155] text-white px-3 py-2 rounded-full z-10 ${
              current === length - 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            ›
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 bg-[#302e2e] py-[12px] w-full mt-4">
          {dits.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? 'bg-white' : 'bg-[#898155]/30'
              } transition-all cursor-pointer`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>

      
{/* md+ screens */}
<div className="hidden md:flex flex-col items-center">
  <div className="w-full overflow-x-hidden scrollbar-hide" ref={scrollRef}>
    <div className="flex gap-4 pb-6 px-2">
      {dits.map((item, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[424px] h-[473px] rounded-lg border ${
            current === index ? 'border-[#898155]' : 'border-[#1D1D1D]'
          } cursor-pointer relative`}
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={item.img}
            alt={`slide-${index}`}
            className="rounded-md object-cover w-[424px] h-full  lg:w-[500px]"
            unselectable="on"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Toggles below scroll container */}
  <div className="flex justify-center gap-4">
    <button
      onClick={prevSlide}
      className={`bg-[#898155] border border-[#898155] text-white px-4 py-2 rounded-full ${
        current === 0 ? 'opacity-30 cursor-not-allowed' : ''
      }`}
      disabled={current === 0}
    >
      ‹
    </button>
    <button
      onClick={nextSlide}
      className={`bg-[#898155] border border-[#898155] text-white px-4 py-2 rounded-full ${
        current === length - 1 ? 'opacity-30 cursor-not-allowed' : ''
      }`}
      disabled={current === length - 1}
    >
      ›
    </button>
  </div>
</div>

    </section>
  );
};

export default Slider;
