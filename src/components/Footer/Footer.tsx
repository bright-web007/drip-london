import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import call from '@/assets/icons-svg/call.svg';
import whatsapp from '@/assets/icons-svg/whatsapp.svg';
import mail from '@/assets/icons-svg/mail.svg';
import { Icon } from '@iconify/react';
import { navLinks } from '@/helpers/data';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-[#0D0D0D] pt-[40px] pr-[24px] pl-[24px] pb-[24px]">
      <div className="flex flex-col text-[#EBEBEB] mb-[24px]">
        <h1 className="text-[14.626px] font-thankslabs mb-[16px] text-[#898155]">DRIP LONDON</h1>
        <p className="text-[12px] font-Montserrat mb-[24px]">
          Drip London is a premier dining and nightlife destination where bold West African flavours
          meet contemporary culinary artistry. Located in the heart of the city, We offer an
          immersive experience that seamlessly transitions from an elegant restaurant to a vibrant
          late-night venue.{' '}
        </p>
        <div className="flex flex-col text-[12px] font-Montserrat ">
          <p>27 Clerkwenwell road,</p>
          <p>London EC1M 5RN</p>
        </div>

        <div className="flex gap-[14px] mt-[12px]">
          <div
            style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
            className="w-[39px] h-[39px]  rounded-full flex items-center justify-center"
          >
            <Image src={call} alt="Icon" className="w-[20px] h-[20px] object-contain" />
          </div>

          <div
            style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
            className="w-[39px] h-[39px]  rounded-full flex items-center justify-center"
          >
            <Image src={mail} alt="Icon" className="w-[20px] h-[20px] object-contain" />
          </div>

          <div
            style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
            className="w-[39px] h-[39px]  rounded-full flex items-center justify-center"
          >
            <Image src={whatsapp} alt="Icon" className="w-[20px] h-[20px] object-contain" />
          </div>
        </div>
      </div>
      <hr className="border-[#1E1E1E]" />

      <div className="mt-[24px] flex gap-[24px] ">
        <div className="flex flex-col  w-full">
          <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px] pb-[16px]">
            QUICK LINKS
          </p>
          {navLinks.map((item, idx, arr) => (
            <React.Fragment key={item.name}>
              <a
                href={item.link}
                className="text-sm uppercase leading-6 font-medium cursor-pointer text-[#EBEBEB] whitespace-nowrap"
              >
                {item.name}
              </a>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px]">
            LEGAL
          </p>

          <div className="text-[12px] text-[#EBEBEB] leading-[12px] flex flex-col gap-[16px]">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>

          <div className="flex gap-[12px]">
            <a
              href="https://www.instagram.com/driplondon.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="line-md:instagram" className="text-[#EBEBEB] w-6 h-6 " />
            </a>

            <a
              href="https://www.facebook.com/p/Driplondonuk-61554516034085/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="circum:facebook" className="text-[#EBEBEB] w-6 h-6" />
            </a>

            <Icon icon="garden:twitter-stroke-12" className="text-[#EBEBEB] w-5 h-5" />
          </div>
        </div>
      </div>
      <hr className=" border-[#1E1E1E]" />

      <p className="text-[#FFFFFF75] text-[10px] font-normal leading-5 text-center my-14 lg:my-20">
        @Drip London Restaurant, London {new Date().getFullYear()}.All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
