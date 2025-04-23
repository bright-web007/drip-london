'use client';

import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { Icon } from '@iconify/react';
import menuBg from '@/assets/menu-bg.jpeg';
import { useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'The Menus', link: '/menu' },
  { name: 'About', link: '/about' },
  { name: 'Book an Event', link: '/' },
  { name: 'News', link: '/' },
  { name: 'Contacts', link: '/' },
];

const MenuNavigation = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-[100vh]">
      <div
        className="w-full md:w-[60%] h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${menuBg.src})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.39)]" />
        <div
          className="absolute z-10 bg-beige-500 p-1 rounded-full flex items-center justify-center w-10 h-10 m-6"
          onClick={() => router.back()}
        >
          <Icon icon="fluent-mdl2:cancel" className="w-3 h-3 text-white cursor-pointer" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="group bg-transparent hover:text-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-4 text-white flex items-center justify-center transition-all duration-300"
            >
              <a
                href={item.link}
                className="flex items-center font-thankslabs text-2xl md:text-[28px] xl:text-[40px]  font-medium leading-10 md:leading-9 xl:leading-14  space-x-1"
              >
                <span>{item.name}</span>
                <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[2.5rem] text-beige-500 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-beige-500 hidden w-full md:w-[50%] xl:w-[40%] h-full md:flex items-center justify-center flex-col">
        <Image src={logo} alt="Drip London Logo" className="mx-auto" width={154} height={78} />
        <div className="font-monserrat font-medium text-white text-base leading-7 mt-8">
          <p className=" text-center">27 Clerkwenwell road, London EC1M 5RN</p>
          <p className=" text-center my-3">+449 098 875 9876</p>
          <p className="text-center">reservations@drip.london</p>
        </div>
        <div className="flex items-center justify-center mt-32">
          <Icon icon="line-md:instagram" className="text-white w-6 h-6 " />
          <hr className="border-t border-[#F0F0F036] my-2 w-6 mx-4" />
          <Icon icon="circum:facebook" className="text-white w-6 h-6" />
          <hr className="border-t border-[#F0F0F036] my-2 w-6 mx-4" />
          <Icon icon="garden:twitter-stroke-12" className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
