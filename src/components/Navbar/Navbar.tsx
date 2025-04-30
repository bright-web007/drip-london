'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import dish from '../../assets/dish.svg';
import dishFill from '../../assets/dish-fill.svg';
import { Icon } from '@iconify/react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import menuHover from '@/assets/icons-svg/menu-hover.svg';

const Navbar = () => {
  const times = [
    'Monday: Closed',
    'Tuesday: Closed',
    'Weds - Thurs: 6:30pm - 12:00am',
    'Fri - Sat: 6:30pm - 2:00am',
    'Sun: 6:30pm - 1:00am',
  ];
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % times.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openNavigation = () => {
    router.push('/navigation');
  };

  return (
    <div className="font-monserrat bg-transparent z-40">
      <div className="flex items-end justify-center">
        <div className="flex items-center h-18 border-b border-white w-[45%]  lg:w-[40%] text-white text-[10px] md:text-sm font-medium leading-6 pl-2 md:pl-4">
          <Button className="bg-beige-500 border-2 border-[#8981555C] cursor-pointer rounded-[2px] px-6 mr-4 hidden md:flex">
            Open Times
          </Button>
          <p
            className={`transition-opacity duration-300 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {times[currentIndex]}
          </p>
        </div>

        <Image
          src={logo}
          alt="Drip London Logo"
          width={154}
          height={72}
          className="mx-auto cursor-pointer  object-contain h-[50px] md:h-[72px]"
        />

        <div className="flex items-center justify-end border-b border-white w-[45%] lg:w-[40%] text-white text-[10px] md:text-sm font-medium leading-6 h-18">
          <div className="flex items-center -ml-4 md:-ml-0 h-full pr-2 md:pr-4 cursor-pointer group">
            <Image
              src={dish}
              alt="Dish"
              width={35}
              height={24}
              className="group-hover:hidden w-7 h-4 md:w-9 md:h-6"
            />
            <Image
              src={dishFill}
              alt="Dish"
              width={35}
              height={24}
              className="hidden group-hover:block w-7 h-4 md:w-9 md:h-6"
            />
            <p className="ml-1 md:ml-2 group-hover:font-semibold text-[10px] md:text-base">
              Reservation
            </p>
          </div>
          <div
            className="group flex items-center px-4 md:px-8 border-l border-white h-full cursor-pointer"
            onClick={openNavigation}
          >
            <Icon
              icon="line-md:menu"
              className="text-white w-5 h-5  md:w-7 md:h-7 cursor-pointer group-hover:hidden"
            />

            <Image
              src={menuHover}
              alt="Menu"
              width={28}
              height={28}
              className="hidden group-hover:block w-5 h-5  md:w-7 md:h-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
