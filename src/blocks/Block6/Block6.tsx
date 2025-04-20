'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '@/assets/slideshowImages/image1.jpeg';
import image2 from '@/assets/slideshowImages/image2.jpeg';
import image3 from '@/assets/slideshowImages/image3.jpeg';

const slideshowImages = [
  {
    src: image1,
    alt: 'drinking',
  },
  {
    src: image2,
    alt: 'Burger',
  },
  {
    src: image3,
    alt: 'cheers',
  },
];

const events = [
  {
    time: 'April 5 2025',
    title: 'Celebrate Your Birthday at Drip London: VIP Packages & More',
    description:
      'Make your next birthday unforgettable with our exclusive celebration packages. From VIP tables and custom menus to bottle service and live DJs.',
  },
  {
    time: 'March 25 2025',
    title: 'Drip Fridays: Late-Night Dining & DJs ’Til Late',
    description:
      'Fridays just hit different at Drip. Join us every week for flavorful bites, signature cocktails, and high-energy DJ sets that keep the vibe going well into the night.',
  },
  {
    time: 'March 20 2025',
    title: 'A Look Back at Our Women’s Day Celebration Brunch',
    description:
      'We toasted to strong women, good vibes, and unforgettable moments. From mimosas to music, relive the highlights of our Women’s Day brunch a celebration of community, empowerment, and joy.',
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
      <div className="flex items-start flex-col md:flex-row justify-between w-[90%] mx-auto py-20">
        <div className="w-full md:w-[40%] group overflow-hidden relative h-[380px] md:h-[290px] xl:h-[450px]">
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
          <h1 className="text-3xl leading-15 font-semibold">Events / Journal</h1>
          {events.map((item, index) => (
            <div className="flex items-start gap-x-4 mb-6" key={index}>
              <p className="text-sm leading-6 font-monserrat w-[15%] md:w-[10%]">{item.time}</p>
              <div className="w-[80%]">
                <h1 className="text-xs md:text-sm leading-6 font-semibold">{item.title}</h1>
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
