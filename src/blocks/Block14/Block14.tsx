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
    }
  };

  return (
    <section className="bg-black py-[100px] pb-[50px] xl:pb-[50px] xl:pt-[100px] md:pt-[50px] w-full h-full relative overflow-hidden">
      <h2 className="text-white text-[18px] font-thankslabs mb-[30px] text-center sm:text-[24px] md:text-[30px] xl:mb-[0px]  xl:text-[32px]">
        Exclusive Events
      </h2>

      {/* Small screens */}
      <div className="relative xl:hidden  h-[800px]  md:h-[900px]">
        <div className="">
          <div className="w-full h-[482px] bg-black border border-[#1D1D1D] rounded-lg text-white flex justify-center items-center md:h-[637px]">
            <Image
              src={lint[current].img}
              alt="food card"
              className="h-full w-full object-cover "
              unselectable="on"
            />
            {/* Bottom */}
            <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 w-[4334px] h-[55px] blur-[15.75px] bg-black opacity-70 z-10 pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="w-full py-[24px] px-[24px]   sm:px-[47px] md:px-[40px] xl:w-[800px] xl:px-[82px] xl:flex xl:flex-col xl:justify-center">
            {lint[current].title && (
              <h3 className="font-normal font-thankslabs text-[16px] leading-[35px]  sm:mb-6 text-[#898155] sm:text-[16px] md:text-[18px] md:mb-4">
                {lint[current].title}
              </h3>
            )}

            <p className="font-Montserrat font-light text-[17px] mb-[14px] leading-[22px] text-[#D5D5D5] sm:mb-[24px] sm:text-[25px] sm:leading-[30px] md:text-[25px] md:mb-[24px] xl:w-[438px] xl:leading-[30px] xl:text-[23px]  xl:mb-[40px]">
              {lint[current].desc}
            </p>

            <div className="w-full">
              {lint[current].buttons?.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => handleButtonClick(button)}
                  className="bg-[rgba(137,129,85,0.15)] font-normal h-[46px] w-full px-4 py-2 border-[0.5px] border-[#3d3926] rounded-[4px] text-[#cfcfcf] text-[14px] sm:text-[18px]  sm:h-[55px] md:text-[18px] md:py-[12px] md:h-[70px] lg:text-[24px] xl:w-[438px] xl:h-[50px]"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div className="absolute top-1/3 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-[40px] h-[40px] bg-black/50  rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 sm:w-[50px] sm:h-[50px] ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" className="w-9 h-9 sm:w-[40px]  sm:h-[40px]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`w-[40px] h-[40px] bg-black/50  rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 sm:w-[50px] sm:h-[50px] ${
              current === length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-right" className="w-9 h-9  sm:w-[40px]  sm:h-[40px]" />
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

      {/* xl screen */}
      <div className="hidden xl:flex flex-col items-center w-screen overflow-hidden">
        {/* Top Toggles */}
        <div className="flex justify-center gap-4 my-[56px]">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-[40px] h-[40px] cursor-pointer bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" fontSize={24} className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === lint.length - 1}
            className={`w-[40px] h-[40px] cursor-pointer bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === lint.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-right" className="w-8 h-8" />
          </button>
        </div>

        {/* Carousel Viewport */}
        <div className="relative w-screen overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}vw)` }}
          >
            {lint.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-screen h-[693px] flex"
                onClick={() => handleImageClick(index)}
              >
                {/* Left Image */}
                <div className="relative w-2/3 h-[693px]">
                  <Image
                    src={item.img}
                    alt="Exclusive Event"
                    fill
                    className="object-cover w-full h-full"
                    unselectable="on"
                    priority={current === index}
                  />

                  {/* Blur Overlays */}
                  <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-[4334px] h-[55px] blur-[11.75px] bg-black opacity-90 z-10 pointer-events-none"></div>
                  <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 w-[4334px] h-[55px] blur-[11.75px] bg-black opacity-90 z-10 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-[-22px] transform -translate-y-1/2 w-[55px] h-[4334px] blur-[11.75px] bg-black opacity-90 z-10 pointer-events-none"></div>
                  <div className="absolute top-1/2 right-[-22px] transform -translate-y-1/2 w-[55px] h-[4334px] blur-[11.75px] bg-black opacity-90 z-10 pointer-events-none"></div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center gap-4 p-[40px] w-1/4 bg-black text-white">
                  {item.title && (
                    <h3 className="font-thankslabs text-[20px] leading-[30px] text-[#898155]">
                      {item.title}
                    </h3>
                  )}
                  <p className="font-Montserrat font-light text-[18px] leading-[28px] text-[#D5D5D5]">
                    {item.desc}
                  </p>
                  <div className="flex flex-col gap-3 pt-4">
                    {item.buttons?.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        onClick={() => handleButtonClick(button)}
                        className="bg-[rgba(137,129,85,0.15)] cursor-pointer font-normal h-[50px] px-4 py-2 border border-[#3d3926] rounded-[4px] text-[#cfcfcf] text-[16px]"
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex mt-6 space-x-2 justify-center">
                    {lint.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`w-[9px] h-[9px] rounded-full ${
                          dotIdx === current ? 'bg-[white]' : 'bg-[#3a3a3a]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
