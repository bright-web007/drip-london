'use client';
import { useState, useEffect } from 'react';
import { reviews } from '@/helpers/data';
import { Icon } from '@iconify/react';

const ReviewsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Icon icon="icon-park-outline:quote" className="w-16 h-16 mb-20 " />
      <div
        className={`w-full md:w-[90%] xl:w-[60%] px-6 text-center transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-sm md:text-lg xl:text-2xl leading-7 xl:leading-12 font-semibold font-thankslabs">
          {reviews[currentIndex].review}
        </h1>
      </div>

      <div className="flex items-center mt-6">
        <h1 className="font-monserrat text-base leading-8 mr-4">{reviews[currentIndex].author}</h1>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon={i < reviews[currentIndex].rating ? 'line-md:star-filled' : 'line-md:star'}
            className={`w-5 h-5 ${
              i < reviews[currentIndex].rating ? 'text-beige-500' : 'text-white opacity-30'
            }`}
          />
        ))}
      </div>
      <div className="flex gap-2 my-4">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex % 3 === i ? 'bg-white' : 'bg-white opacity-30'
            }`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ReviewsCard;
