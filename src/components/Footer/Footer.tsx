import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { Icon } from '@iconify/react';
import { navLinks } from '@/helpers/data';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-beige-500 py-12 font-monserrat">
      <div className="flex items-end justify-center">
        <hr className="border-t border-[#F0F0F036] my-2 w-[25%] lg:w-[40%]" />
        <Image
          src={logo}
          alt="Drip London Logo"
          className="mx-auto"
          width={154}
          height={78}
          onClick={() => router.push('/')}
        />
        <hr className="border-t border-[#F0F0F036] my-2 w-[25%] lg:w-[40%]" />
      </div>
      <div className="w-[70%] xl:w-[50%] mx-auto pt-10">
        <div className="flex items-center flex-wrap justify-center xl:justify-between gap-x-2 ">
          {navLinks.map((item, idx, arr) => (
            <React.Fragment key={item.name}>
              <a
                href={item.link}
                className="text-sm uppercase leading-6 font-medium cursor-pointer text-white whitespace-nowrap"
              >
                {item.name}
              </a>
              {idx !== arr.length - 1 && (
                <Icon icon="oui:dot" className="text-white w-[14px] h-[14px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="text-[#FFFFFF75] text-sm font-normal leading-5 text-center my-14 lg:my-20">
        @Drip London Restaurant, London {new Date().getFullYear()}
      </p>
      <div className="flex items-center justify-center">
        <Icon icon="line-md:instagram" className="text-white w-6 h-6 " />
        <hr className="border-t border-[#F0F0F036] my-2 w-6 mx-4" />
        <Icon icon="circum:facebook" className="text-white w-6 h-6" />
        <hr className="border-t border-[#F0F0F036] my-2 w-6 mx-4" />
        <Icon icon="garden:twitter-stroke-12" className="text-white w-5 h-5" />
      </div>
    </div>
  );
};

export default Footer;
