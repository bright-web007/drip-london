'use client';

import Image from 'next/image';
import logo from '@/assets/icons-svg/drip-icon-white.png';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import menuHover from '@/assets/icons-svg/menu-hover.svg';

const Navbar = () => {
  const router = useRouter();
  const openNavigation = () => {
    router.push('/navigation');
  };

  return (
    <div className="font-monserrat bg-transparent z-40 flex justify-between pt-[12px] px-[24px]  md:px-[40px] xl:px-[100px]">
      <div className="pt-[10px]">
        <Image
          src={logo}
          alt="Drip London Logo"
          width={30.623}
          height={43.442}
          onClick={() => router.push('/')}
          className=" cursor-pointer   md:h-[(61.3333px]"
        />
      </div>

      <div className="flex items-center justify-center h-[60px]">
        <div
          className="group flex items-center h-full cursor-pointer  md:hidden"
          onClick={openNavigation}
        >
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
        <div className="hidden md:flex items-center justify-center  font-thankslabs text-[white] gap-[20px]  text-[11px] xl:">
          <p onClick={() => router.push('/contact-us')} className="cursor-pointer">
            RESERVATIONS
          </p>
          <p onClick={() => router.push('/menu')} className="cursor-pointer">
            MENU
          </p>
          <p onClick={() => router.push('/news')} className="cursor-pointer">
            PRIVATE DINNING
          </p>
          <p onClick={() => router.push('/faq')} className="cursor-pointer">THE EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
