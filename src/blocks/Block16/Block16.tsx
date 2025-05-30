import React from 'react';
import fork from '@/assets/fork.svg';
import group1 from '@/assets/left-fly.svg';
import group2 from '@/assets/right-fly.svg';
import Image from 'next/image';
import dinning from '@/assets/dinning-table.png';
import fulldinning from '@/assets/full-dinning.png';

const Block16 = () => {
  return (
    <div className=" pt-[36px] pr-[24px] pb-[55px] pl-[24px] sm:pt-[40px] sm:pr-[28px] sm:pl-[28px]   md:pt-[70px] md:pl-[36px] md:pr-[36px] md:flex   lg:pr-[70px] lg:pl-[70px]   xl:pt-[70px] xl:pb-[55px] xl:pr-[120px] xl:pl-[120px]  xl:justify-center xl:items-center xl:self-stretch ">
      <div className=" md:flex w-[90%] md:w-[97%]  xl:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="h-[624px]   md:w-[50%]  flex  p-[24px] flex-col bg-[#F4F1E1]   ">
          <div className="h-[576px] flex flex-col items-start self-stretch gap-[32px] border-2 border-[rgba(107,107,107,0.48)] p-[40px]  sm:p-[50px]   md:p-[40px] ">
            <div className="h-[72px] w-[254]  flex flex-col  self-stretch gap-[12px] ">
              <p className="h-[30px] w-[254] font-thankslabs text-[16px] text-[#898155] not-italic font-[254px] leading-[30px] self-stretch    sm:text-[19px]   md:text-[22px]">
                Phone
              </p>
              <p className="h-[30px] w-[254] font-montserrat text-[14px]  text-[#898155] not-italic font-[254px]    sm:text-[16px]   md:text-[18px]">
                +449 654 8789
              </p>
            </div>

            <div className="h-[72px] w-[254]  flex flex-col self-stretch gap-[12px]">
              <p className="h-[30px] w-[254] font-thankslabs text-[16px] text-[#898155] not-italic font-[254px] leading-[30px] self-stretch    sm:text-[19px]   md:text-[22px]">
                E-mail
              </p>
              <a
                href="mailto:reservations@drip.london"
                className="h-[30px] w-[254] font-montserrat text-[14px] text-[#898155] underline decoration-solid decoration-skip-ink-none decoration-[auto] underline-offset-auto not-italic    sm:text-[16px]   md:text-[18px]"
              >
                reservations@drip.london
              </a>
            </div>

            <div className="h-[120px] w-[254]  flex flex-col  self-stretch gap-[12px]">
              <p className="h-[30px] w-[254] font-thankslabs text-[16px] text-[#898155] not-italic font-[254px] leading-[30px] self-stretch    sm:text-[19px]   md:text-[22px]">
                Address
              </p>
              <p className="h-[60px] w-[254] font-montserrat text-[14px]  text-[#898155] not-italic font-[254px]    sm:text-[16px]  md:text-[18px]">
                27 Clerkwenwell road, London EC1M 5RN
              </p>
            </div>

            <div className="h-[162px] w-[254]  flex flex-col  self-stretch gap-[12px]">
              <div className="h-[60px] w-[254] font-thankslabs text-[16px] text-[#898155] not-italic font-[254px] leading-[30px] self-stretch    sm:text-[19px]   md:text-[22px]">
                <p>Opening Hours</p>
              </div>
              <div className="h-[120px] w-[254] font-montserrat text-[14px]  text-[#898155] not-italic font-[254px] leading-[21px] self-stretch    sm:text-[18px]">
                <p>Monday-Closed</p>
                <p>Tuesday-Closed</p>
                <p>Wednesday to Sunday: 6:30pm-2:00am</p>
              </div>
            </div>
          </div>
        </div>

        {/* savor a tasty meal design */}

        <div className="bg-[#898155]  p-[24px] h-[624px] md:w-[50%]  xl:h-[624px]">
          <div className="h-[576px]  border-2 flex flex-col gap-[12px]  items-center p-[10px] justify-center   sm:p-[40px] sm:gap-[20px]   md:p-[30px]">
            <div className="h-[60px] w-[48px]  ">
              <Image src={fork} alt="fork and knife" />
            </div>

            <div>
              <p className="h-[60px] w-[254px] font-thankslabs text-[white] text-[22px] text-center font-[254px] not-italic leading-[30px] self-stretch">
                Savor a Tasty Meal
              </p>
            </div>

            <div className="flex items-center">
              <div className="h-[24px] w-[16px]">
                <Image src={group1} alt="group1" />
              </div>

              <div className="flex p-[4px] flex-col items-start border-2 border-[rgba(107,107,107,0.48)] w-[145px] h-[57px]">
                <div className="w-[137px] h-[49px] border-2 pr-[20px] pl-[20px] pt-[10px] pb-[10px]">
                  <p className="text-[14px] font-monserrat text-center text-[white]">
                    Book a Table
                  </p>
                </div>
              </div>

              <div className="h-[24px] w-[16px]">
                <Image src={group2} alt="group2" />
              </div>
            </div>

            <div className=" w-[126%] h-[80%] sm:w-[130%]   md:w-[145%]   lg:w-[134%]      xl:hidden">
              <Image src={dinning} alt="dinning table" className="w-full h-[309px]" />
            </div>

            <div className="hidden  w-[110%] h-[80%]  xl:block">
              <Image src={fulldinning} alt="dinning table" className="w-full h-[309px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block16;
