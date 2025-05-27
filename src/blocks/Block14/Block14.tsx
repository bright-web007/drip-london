'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lint } from '@/helpers/data';
import { Icon } from '@iconify/react';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = lint.length;
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const prevSlide = () => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -424, behavior: 'smooth' });
      }
      setCurrent(prev => (prev > 0 ? prev - 1 : 0));
    } else {
      if (current > 0) setCurrent(prev => prev - 1);
    }
  };

  const nextSlide = () => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 424, behavior: 'smooth' });
      }
      setCurrent(prev => (prev < length - 1 ? prev + 1 : prev));
    } else {
      if (current < length - 1) setCurrent(prev => prev + 1);
    }
  };

  const handleImageClick = (index: number) => {
    if (window.innerWidth >= 768) {
      if (scrollRef.current) {
        const scrollLeft = index * 424;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
      setCurrent(index);
    } else {
      setCurrent(index);
    }
  };

  const handleButtonClick = (button: { label: string; path?: string }) => {
    if (button.path) {
      router.push(button.path);
    } else {
      console.log('No path found for button:', button.label);
    }
  };

  return (
    <section className="bg-black py-[100px] pb-[200px] xl:pb-[250px] xl:pt-[250px] px-6 w-full h-full relative overflow-hidden">
      <h2 className="text-white text-[18px] font-thankslabs mb-[30px] text-center sm:text-[26px] md:text-[28px] xl:mb-[35px]  xl:text-[32px]">
        Exclusive Events
      </h2>

      {/* Small screens */}
      <div className="relative md:hidden border-2 border-[red]">
        <div>
          <div className="w-full h-[349px] bg-black border border-[#1D1D1D] rounded-lg text-white flex justify-center items-center">
            <Image
              src={lint[current].img}
              alt="food card"
              className="h-full w-[382px] object-cover sm:w-[600px]"
              unselectable="on"
            />
          </div>

          {/* Content */}
          <div className="w-full py-[24px] px-[24px] md:px-[40px] xl:w-[800px] xl:px-[82px] xl:flex xl:flex-col xl:justify-center">
            {lint[current].title && (
              <h3 className="font-normal font-thankslabs text-[16px] leading-[35px]  sm:mb-6 text-[#898155] sm:text-[16px] md:text-[18px] md:mb-4">
                {lint[current].title}
              </h3>
            )}

            <p className="font-Montserrat font-light text-[16px] leading-[22px] text-[#D5D5D5] mb-[30px] sm:mb-[24px] sm:text-[26px] sm:leading-[32px] md:text-[25px] md:mb-[60px] xl:w-[438px] xl:leading-[30px] xl:text-[23px]  xl:mb-[40px]">
              {lint[current].desc}
            </p>

            <div className="w-full">
              {lint[current].buttons?.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => handleButtonClick(button)}
                  className="bg-[rgba(137,129,85,0.15)] font-normal h-[50px] sm:h-[62px] w-full px-4 py-2 border-[0.5px] border-[#3d3926] rounded-[4px] text-[#cfcfcf] text-[14px] sm:text-[18px] md:text-[18px] md:py-[12px] md:h-[70px] xl:w-[438px] xl:h-[50px]"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-[30px] h-[30px] bg-black/50  rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`w-[30px] h-[30px] bg-black/50  rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-right" className="w-8 h-8" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2  py-[12px] w-full">
          {lint.map((_, index) => (
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
      <div className="hidden md:flex flex-col items-center py-[56px] md:px-[40px] xl:px-[100px]">
        <div
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          ref={scrollRef}
        >
          <div className="flex gap-4 pb-6 px-2 w-max">
            {lint.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[424px] h-[473px] snap-start rounded-lg border ${
                  current === index ? 'border-[#898155]' : 'border-[#1D1D1D]'
                } cursor-pointer relative`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={item.img}
                  alt="picture"
                  className="rounded-[4px] object-cover w-[424px] h-full lg:w-[500px]"
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
            disabled={current === 0}
            className={`w-[35px] h-[35px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`w-[35px] h-[35px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-right" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
