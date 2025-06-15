'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { navLinker } from '@/helpers/data';

const MenuNavigation = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between h-[100vh]">
      <div className="w-full h-full bg-black bg-center relative">
        {/* Logo and close */}
        <div className="flex justify-between items-center m-6 z-10 relative">
          <Image
            src="https://drip-london1.s3.eu-north-1.amazonaws.com/drip-icon-white.webp"
            alt="Drip London Logo"
            width={30.623}
            height={43.442}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
          <Icon
            icon="fluent-mdl2:cancel"
            className="w-10 h-10 text-white cursor-pointer"
            onClick={() => router.back()}
          />
        </div>

        {/* Navigation Links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Home Link */}
          <div className="group bg-transparent hover:text-beige-500 text-sm cursor-pointer rounded-[2px] px-6 text-white flex flex-col items-center justify-center transition-all duration-300">
            <h1
              onClick={() => router.push('/')}
              className="flex items-center font-thankslabs text-xl sm:text-[40px] md:text-[28px] xl:text-[40px] font-medium leading-10 md:leading-9 xl:leading-14 space-x-1"
            >
              <span>Home</span>
              <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[2.5rem] text-beige-500 group-hover:opacity-100 transition-all duration-300">
                →
              </span>
            </h1>
            <hr className="w-[64px] h-0.1 bg-[#898155] my-[35px] sm:my-[64px]" />
          </div>

          {/* Dynamic Nav Links */}
          {navLinker.map((item, index) => (
            <div
              key={item.name}
              className="group cursor-pointer text-sm rounded-[2px] px-6 text-white flex flex-col items-center justify-center transition-all duration-300"
            >
              <Link href={item.link} scroll={false}>
                <span className="flex items-center font-thankslabs text-[20px] sm:text-[40px] md:text-[28px] xl:text-[40px] font-medium leading-10 md:leading-9 xl:leading-14 space-x-1">
                  <span>{item.name}</span>
                  <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[2.5rem] text-beige-500 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </span>
              </Link>
              {index !== navLinker.length - 1 && (
                <hr className="w-[64.08px] h-0.1 bg-[#898155] my-[35px] sm:my-[64px]" />
              )}
            </div>
          ))}
        </div>

        {/* Visual Accent Circles */}
        <div className="absolute top-40 left-1/5 transform -translate-x-1/2 w-[100px] rounded-full h-[100px] bg-[rgba(137,129,85,0.25)] blur-[40px] border-2 border-red-500 z-20 sm:w-[150px] sm:h-[150px]" />
        <div className="absolute bottom-20 right-2 transform -translate-x-1/2 w-[100px] h-[100px] blur-[30px] rounded-full bg-[rgba(69,64,217,0.33)] border-2 border-red-500 z-20 sm:w-[150px] sm:h-[150px]" />
      </div>
    </div>
  );
};

export default MenuNavigation;
