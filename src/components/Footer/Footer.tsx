'use client';
import React from 'react';
import Image from 'next/image';
import call from '@/assets/icons-svg/call.svg';
import whatsapp from '@/assets/icons-svg/whatsapp.svg';
import mail from '@/assets/icons-svg/mail.svg';
import location from '@/assets/icons-svg/location.svg';
import { Icon } from '@iconify/react';
import { navLinks } from '@/helpers/data';

const Footer = () => {
  return (
    <>
      <div className="bg-[#0D0D0D] pt-[40px] pr-[24px] pl-[24px] pb-[24px] xl:flex xl:gap-[24px] xl:pr-[100px] xl:pl-[100px] xl:pt-[60px] xl:pb-[24px]">
        <div className="flex flex-col text-[#EBEBEB] mb-[24px] xl:w-[full]">
          <h1 className="text-[14.626px] font-thankslabs mb-[16px] text-[#898155] sm:text-[19px] md:text-[27.049px] md:mb-[44px]">
            DRIP LONDON
          </h1>
          <p className="text-[12px] font-Montserrat mb-[24px] leading-[18px] sm:text-[13px] md:text-[14px] md:leading-[20px] xl:text-[16px]">
            Drip London is a premier dining and nightlife destination where bold West African
            flavours meet contemporary culinary artistry. Located in the heart of the city, we offer
            an immersive experience that seamlessly transitions from an elegant restaurant to a
            vibrant late-night venue.
          </p>

          <div className="flex flex-col text-[12px] font-Montserrat sm:text-[13px] md:text-[14px] md:flex-row md:items-center">
            <div>
              <Image
                src={location}
                alt="Icon"
                className="w-[39px] h-[39px] mr-[14px] object-contain hidden md:block"
              />
            </div>
            <div className="md:flex md:text-[14px] xl:text-[16px]">
              <p>27 Clerkenwell Road,</p>
              <p>London EC1M 5RN</p>
            </div>
          </div>

          <div className="flex gap-[14px] mt-[11px] md:mt-[24px] md:flex-col">
            <div className="md:flex md:items-center">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <Image src={call} alt="Icon" className="w-[20px] h-[20px] object-contain" />
              </div>
              <div>
                <p className="hidden text-[14px] md:block leading-[18px] ml-[14px] md:text-[14px] xl:text-[16px]">
                  +44 7923628705
                </p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <Image src={mail} alt="Icon" className="w-[20px] h-[20px] object-contain" />
              </div>
              <div>
                <a
                  href="mailto:Reservations@drip.london"
                  className="hidden text-[14px] md:block leading-[18px] ml-[14px] md:text-[14px] xl:text-[16px]"
                >
                  Reservations@drip.london
                </a>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <Image src={whatsapp} alt="Icon" className="w-[20px] h-[20px] object-contain" />
              </div>
              <div>
                <p className="hidden md:block text-[14px] leading-[18px] ml-[14px] md:text-[14px] xl:text-[16px]">
                  +44 7923628705
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#2a2828] h-[3px]" />

        <div className="mt-[24px] flex gap-[24px] md:mb-[24px] xl:w-full xl:mt-[85px]">
          <div className="flex flex-col w-full">
            <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px] pb-[16px] md:text-[16px] md:leading-[26px]">
              QUICK LINKS
            </p>
            {navLinks.map(item => (
              <React.Fragment key={item.name}>
                <a
                  href={item.link}
                  className="text-sm uppercase leading-6 font-medium cursor-pointer text-[#EBEBEB] whitespace-nowrap md:text-[16px]"
                >
                  {item.name}
                </a>
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col gap-[16px] w-full">
            <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px] md:text-[16px] md:leading-[26px]">
              LEGAL
            </p>

            <div className="text-[12px] text-[#EBEBEB] leading-[12px] flex flex-col gap-[16px] md:text-[16px]">
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
                <Icon icon="line-md:instagram" className="text-[#EBEBEB] w-6 h-6" />
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

        <hr className="border-[#2a2828] h-[3px] xl:h-[5px]" />
      </div>

      <div className="bg-[#0D0D0D]">
        <p className="text-[#FFFFFF75] text-[10px] font-normal leading-5 text-center my-14 md:text-[16px] bg-[#0D0D0D]">
          @Drip London Restaurant, London {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
