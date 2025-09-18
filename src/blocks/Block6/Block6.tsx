'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { events } from '@/helpers/data';

const slideshowImages = [
  {
    src: 'https://drip-london1.s3.eu-north-1.amazonaws.com/image1.webp',
    alt: 'drinking',
  },
  {
    src: 'https://drip-london1.s3.eu-north-1.amazonaws.com/image2.webp',
    alt: 'Burger',
  },
  {
    src: 'https://drip-london1.s3.eu-north-1.amazonaws.com/image3.webp',
    alt: 'cheers',
  },
];

const Block6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-beige-400 md:bg-white">
      <div className="flex items-start flex-col md:flex-row justify-between w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto py-20">
        <div className="w-full md:w-[40%] group overflow-hidden relative h-[380px] md:h-[290px] xl:h-[450px] mb-12 md:mb-0">
          <Image
            src={slideshowImages[currentIndex].src}
            alt={slideshowImages[currentIndex].alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
            width={400}
            height={400}
          />
        </div>

        <div className="w-full md:w-[56%] text-beige-500">
          <h1 className="text-[28px] xl:text-3xl font-semibold font-thankslabs mb-8 xl:mb-12">
            Events / Journal
          </h1>
          {events.map((item, index) => (
            <div className="flex items-start gap-x-4 mb-6 md:mb-8" key={index}>
              <p className="text-sm leading-6 font-monserrat w-[15%]">{item.time}</p>
              <div className="w-[80%]">
                <h1 className="text-xs md:text-sm leading-6 font-semibold font-thankslabs mb-4 md:mb-6">
                  {item.title}
                </h1>
                <p className="text-xs md:text-sm leading-5 md:leading-6 font-monserrat">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Block6;
