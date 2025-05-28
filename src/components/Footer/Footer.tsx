'use client';
import React from 'react';
import Image from 'next/image';
import call from '@/assets/icons-svg/call.svg';
import whatsapp from '@/assets/icons-svg/whatsapp.svg';
import mail from '@/assets/icons-svg/mail.svg';
import location from '@/assets/icons-svg/location.svg';
import { Icon } from '@iconify/react';
import { navLinker } from '@/helpers/data';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#0D0D0D]">
      <div className="bg-[#0D0D0D] pt-[40px] pr-[28px] pl-[28px] sm:pr-[40px] sm:pl-[40px] pb-[24px] xl:flex xl:gap-[70px] xl:pr-[100px] xl:pl-[100px] xl:pt-[60px] xl:pb-[24px]">
        <div className="flex flex-col text-[#EBEBEB] mb-[24px] xl:w-[full]">
          <h1
            onClick={() => router.push('/')}
            className="text-[16px] font-bold font-thankslabs mb-[16px] cursor-pointer text-[#898155] sm:text-[30px] md:text-[32px]  xl:text-[32px] md:mb-[26px]"
          >
            DRIP LONDON
          </h1>

          <p className="text-[14px] text-[#cfcfcf] font-Montserrat font-light mb-[24px] sm:leading-[29px] sm:text-[21px] md:text-[24px] md:leading-[30px] md:mb-[38px] xl:text-[16px]  xl:w-[490px]">
            Drip London is a premier dining and nightlife destination where bold West African
            flavours meet contemporary culinary artistry. Located in the heart of the city, we offer
            an immersive experience that seamlessly transitions from an elegant restaurant to a
            vibrant late-night venue.
          </p>

          <div className="flex flex-col mb-[-8px] text-[12px] font-Montserrat sm:text-[13px] md:text-[14px] md:flex-row md:items-center">
            <div>
              <Image
                src={location}
                alt="Icon"
                className="w-[39px] h-[39px] mr-[14px] object-contain hidden md:block"
              />
            </div>
            <div className="md:flex text-[#cfcfcf] text-[14px] md:text-[24px] font-light sm:text-[21px] xl:text-[16px]">
              <p>27 Clerkenwell Road,</p>
              <p>London EC1M 5RN</p>
            </div>
          </div>

          <div className="flex gap-[14px] mt-[30px] md:mt-[24px] md:flex-col  sm:mt-[28px]">
            <div className="md:flex md:items-center cursor-pointer">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <a href="tel:+44 7923628705">
                  <Image src={call} alt="Icon" className="w-[20px] h-[20px] object-contain" />
                </a>
              </div>
              <div>
                <a href="tel:+44 7923628705">
                  <p className="hidden text-[14px] font-light md:block leading-[18px] text-[#cfcfcf] sm:text-[21px] ml-[14px] md:text-[24px]  xl:text-[16px]">
                    +44 7923628705
                  </p>
                </a>
              </div>
            </div>

            <div className="md:flex md:items-center pointer-cursor">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <a href="mailto:Reservations@drip.london">
                  <Image src={mail} alt="Icon" className="w-[20px] h-[20px] object-contain" />
                </a>
              </div>
              <div>
                <a
                  href="mailto:Reservations@drip.london"
                  className="hidden text-[14px] font-light md:block leading-[18px] ml-[14px] md:text-[24px] sm:text-[21px] text-[#cfcfcf] xl:text-[16px]"
                >
                  <p> Reservations@drip.london </p>
                </a>
              </div>
            </div>

            <div className="md:flex md:items-center cursor-pointer">
              <div
                style={{ backgroundColor: 'rgba(137, 129, 85, 0.15)' }}
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
              >
                <a href="tel:+44 7923628705">
                  <Image src={whatsapp} alt="Icon" className="w-[20px] h-[20px] object-contain" />
                </a>
              </div>
              <div>
                <a href="tel:+44 7923628705">
                  <p className="hidden md:block text-[14px] font-light leading-[18px] ml-[14px] md:text-[24px] sm:text-[21px] text-[#cfcfcf] xl:text-[16px]">
                    +44 7923628705
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#1e1e1e] h-[3px]" />

        <div className="mt-[24px] flex gap-[24px] sm:mt-[50px] md:mb-[24px] xl:w-full xl:mt-[75px] xl:gap-[0px] ">
          <div className="flex flex-col w-full gap-[20px] sm:gap-[30px]">
            <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px]  sm:text-[21px] md:text-[25px] md:leading-[26px]  md:pb-[18px]  xl:text-[16px]">
              QUICK LINKS
            </p>
            <div className="flex flex-col gap-[20px] sm:gap-[32px] md:gap-[38px]">
              {navLinker.map(item => (
                <React.Fragment key={item.name}>
                  <Link href={item.link} scroll={false}>
                    <span className="text-[14px] leading-[12px] font-light cursor-pointer text-[#cfcfcf] whitespace-nowrap md:text-[24px] sm:text-[21px] xl:text-[16px]">
                      {item.name}
                    </span>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[20px] sm:gap-[30px] w-full  ">
            <p className="text-[12px] font-thankslabs text-[#898155] leading-[12px] not-italic font-[500px] md:text-[25px] md:leading-[26px] sm:text-[21px]  md:pb-[18px]  xl:text-[16px]">
              LEGAL
            </p>

            <div className="text-[14px] text-[#cfcfcf] gap-[20px] leading-[12px] flex flex-col sm:gap-[32px] md:text-[24px] font-light sm:text-[21px]  md:gap-[38px] xl:text-[16px]">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookies Policy</p>
            </div>

            <div className="flex gap-[12px] sm:mt-[4px]">
              <a
                href="https://www.instagram.com/driplondon.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="line-md:instagram" className="text-[#cfcfcf] w-6 h-6" />
              </a>

              <a
                href="https://www.facebook.com/p/Driplondonuk-61554516034085/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="circum:facebook" className="text-[#cfcfcf] w-6 h-6" />
              </a>

              <Icon icon="garden:twitter-stroke-12" className="text-[#cfcfcf] w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D0D0D] border-t-3 border-t-[#1e1e1e]  xl:border-t-2 mt-17 sm:pb-[30px]">
        <p className="text-[#616161] text-[12px] sm:text-[18px]   font-light leading-5 text-center my-4 sm:pt-[10px] md:text-[16px] bg-[#0D0D0D]  xl:w-full  xl:text-[16px]">
          Copyright © 2025 Drip London. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
