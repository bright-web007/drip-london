'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { dits } from '@/helpers/data';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block4 = () => {
  const [current, setCurrent] = useState(0);
  const length = dits.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
    });
  }, []);

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
    }
    setCurrent(index);
  };

  return (
    <section className="bg-black py-[100px] pb-[200px] xl:pb-[250px] xl:pt-[250px] px-6 w-full h-full relative overflow-hidden">
      <h2
        className="text-white text-[18px] font-thankslabs mb-[30px] text-center sm:text-[26px] md:text-[28px] xl:mb-[35px]  xl:text-[32px]"
        data-aos="custom-fade-in"
        data-aos-delay="1000"
      >
        A Glimpse of Drip
      </h2>

      {/* Small screens */}
      <div className="relative md:hidden">
        <div
          key={current}
          className="w-full h-[349px] bg-black border border-[#1D1D1D] rounded-lg text-white flex justify-center items-center"
          data-aos="custom-fade-in"
          data-aos-delay="1000"
        >
          <Image
            src={dits[current].img}
            alt="food card"
            className="h-full w-[382px] object-cover sm:w-[600px]"
            unselectable="on"
          />
        </div>

        {/* Mobile toggles */}
        <div
          className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4"
          data-aos="custom-fade-in"
          data-aos-delay="1000"
        >
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-[30px] h-[30px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`w-[30px] h-[30px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-right" className="w-8 h-8" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div
          className="flex justify-center gap-2 bg-[#302e2e] py-[12px] w-full"
          data-aos="custom-fade-in"
          data-aos-delay="1000"
        >
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

      {/* Desktop */}
      <div
        className="hidden md:flex flex-col items-center py-[56px] md:px-[40px] xl:px-[100px]"
        data-aos="custom-fade-in"
        data-aos-delay="1000"
      >
        <div
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          ref={scrollRef}
        >
          <div className="flex gap-4 pb-6 px-2 w-max">
            {dits.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[424px] h-[473px] snap-start rounded-lg border ${
                  current === index ? 'border-[#898155]' : 'border-[#1D1D1D]'
                } cursor-pointer relative transition-opacity duration-300`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={item.img}
                  alt={`slide-${index}`}
                  className="rounded-[4px] object-cover w-[424px] h-full lg:w-[500px]"
                  unselectable="on"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-[40px] h-[40px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
            }`}
          >
            <Icon icon="ic:round-chevron-left" className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === length - 1}
            className={`w-[40px] h-[40px] bg-[#898155] border border-[#898155] rounded-full z-10 flex items-center justify-center text-white transition-opacity duration-300 ${
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

export default Block4;
