'use client';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Richard Johnson',
    quote:
      'The food, the drinks, the music — everything was a 10/10. Drip London gave us one of the best nights out we’ve had in the city!',
  },
  {
    name: 'Amelia Thompson',
    quote:
      'Absolutely phenomenal vibes. The service was impeccable and the ambience unforgettable. Highly recommend Drip London!',
  },
  {
    name: 'Daniel Lee',
    quote:
      'We celebrated our anniversary here and it was magical. Great cocktails, great people, and even better energy all night.',
  },
];

const Block5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-beige-400 md:bg-white text-beige-500 py-16 xl:py-20">
      <Icon icon="icon-park-outline:quote" className="w-16 h-16 mb-20" />

      <div
        className={`w-full max-w-2xl px-6 text-center transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-sm leading-8 font-semibold font-thankslabs">
          {reviews[currentIndex].quote}
        </h1>
      </div>

      <div className="flex items-center mt-6">
        <h1 className="font-monserrat text-base leading-8 mr-4">{reviews[currentIndex].name}</h1>
        {[1, 2, 3, 4, 5].map(item => (
          <Icon icon="line-md:star-filled" key={item} className="w-5 h-5 text-beige-500" />
        ))}
      </div>

      <div className="flex gap-2 my-4">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i ? 'bg-beige-500' : 'bg-beige-500 opacity-30'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Block5;
