'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/icons-svg/drip-icon-white.png';
import { Icon } from '@iconify/react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import menuHover from '@/assets/icons-svg/menu-hover.svg';

// Moved outside the component to avoid re-declaring every render
const times = [
  'Monday: Closed',
  'Tuesday: Closed',
  'Weds - Thurs: 6:30pm - 12:00am',
  'Fri - Sat: 6:30pm - 2:00am',
  'Sun: 6:30pm - 1:00am',
];

const Navbar = () => {
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
  }, []); // ✅ No warning now since times.length is from a stable reference

  const openNavigation = () => {
    router.push('/navigation');
  };

  return (
    <div className="font-monserrat bg-transparent z-40 flex justify-between mt-[12px] px-[24px]">
      <div className="">
        <Image
          src={logo}
          alt="Drip London Logo"
          width={30.623}
          height={43.442}
          onClick={() => router.push('/')}
          className=" cursor-pointer   md:h-[72px]"
        />
      </div>

      <div className="group flex items-center h-full cursor-pointer" onClick={openNavigation}>
        <Icon
          icon="line-md:menu"
          className="text-white w-[38.869px] h-[43.442px]  md:w-7 md:h-7 cursor-pointer group-hover:hidden"
        />

        <Image
          src={menuHover}
          alt="Menu"
          width={28}
          height={28}
          className="hidden group-hover:block w-[38.869px] h-[43.442px]  md:w-7 md:h-7"
        />
      </div>
    </div>
  );
};

export default Navbar;
