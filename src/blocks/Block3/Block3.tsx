'use client';
import { useRouter } from 'next/navigation';
import { items } from '@/helpers/data';
import Image from 'next/image';
import type { Button } from '@/helpers/data';

const Block3 = () => {
  const router = useRouter();

  const handleButtonClick = (button: Button) => {
    if (button.actionType === 'navigate' && button.path) {
      router.push(button.path);
    }
  };

  return (
    <div className="bg-[#000000]">
      {items.map((item, index) => (
        <div key={index} className="pt-[100px] lg:pt-[120px] xl:pt-[140px]">
          {/* Title */}
          <h2 className="text-[18px] text-white font-thankslabs not-italic leading-[35px] font-bold mb-[30px] text-center sm:text-[21px] md:text-[24px] md:mb-[56px] lg:text-[28px] xl:text-[32px]  xl:pb-[56px]">
            {item.title}
          </h2>

          {/* Image + Content Wrapper with Conditional Flex Direction */}
          <div
            className={`xl:flex xl:items-center xl:gap-[40px] ${
              index === 1 ? 'xl:flex-row-reverse' : ''
            }`}
          >
            {/* Image with inner shadow */}
            <div className="w-full xl:w-[976px] mb-[18px] md:mb-[56px] xl:mb-0">
              {item.img && (
                <div
                  className="relative h-[432px] md:h-[693px] xl:h-[693px] w-full rounded overflow-hidden"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)' }} // Inner shadow
                >
                  <div className="h-[50px] w-[4334px] border-2 border-[black]  absolute top-[2px] left-1/2 transform -translate-x-1/2 blur-[14.75px] bg-[black]"></div>
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                  {/* Bottom Blur */}
                  <div className="h-[70px] w-[4334px] border-2 border-[black]  absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 blur-[13.75px] bg-[black]"></div>
                  {/* Top Blur */}
                  <div className="hidden h-[50px] w-[4334px] absolute top-[-20px] left-0 blur-[14.75px] transform -translate-x-1/2 bg-black  md:flex"></div>
                  {/* Left Blur */}
                  <div className="hidden w-[50px] h-full absolute top-0 left-0 blur-[14.75px] bg-black transform -translate-x-1/2 xl:flex"></div>

                  {/* Right Blur */}
                  <div className="hidden w-[50px] h-full absolute top-0 right-[-45px] blur-[14.75px] bg-black transform -translate-x-1/2 xl:flex"></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="w-full py-[24px] px-[38px] md:px-[40px] xl:w-[800px] xl:px-[82px] xl:flex xl:flex-col xl:justify-center">
              {item.subtitle && (
                <h3 className="font-normal font-Montserrat text-[10px] mb-1 text-[#898155] sm:text-[14px] md:text-[13px] md:mb-4">
                  {item.subtitle}
                </h3>
              )}

              <p className="font-Montserrat font-light text-[16px] leading-[22px] text-[#D5D5D5] mb-[24px] sm:text-[18px] md:text-[20px]  xl:w-[438px] xl:leading-[26px]">
                {item.desc}
              </p>

              <div className="w-full">
                {item.buttons?.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    onClick={() => handleButtonClick(button)}
                    className="bg-[rgba(137,129,85,0.15)] font-normal h-[46px] w-full px-4 py-2 border-[0.5px] border-[#3d3926] rounded-[4px] text-[#cfcfcf] text-[14px] sm:text-[15px] md:text-[14px] md:py-[12px] md:h-[54px]  xl:w-[438px]"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
