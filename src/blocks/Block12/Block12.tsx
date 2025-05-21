'use client';
import { useRouter } from 'next/navigation';
import { mens } from '@/helpers/data';
import Image from 'next/image';
import type { Button } from '@/helpers/data';

const Block3 = () => {
  const router = useRouter();

  const handleButtonClick = (button: Button) => {
    if (button.actionType === 'navigate' && button.path) {
      if (button.path.startsWith('http')) {
        // Open external links (like Google Drive) in a new tab
        window.open(button.path, '_blank');
      } else {
        // Internal navigation
        router.push(button.path);
      }
    }
  };

  return (
    <div
      className="bg-[#000000] py-[120px]  md:py-[63px]  xl:flex  xl:gap-[24px] justify-center  xl:py-[187px] xl:px-[121px]"
      id="next"
    >
      {mens.map((men, index) => (
        <div
          key={index}
          className="pt-[80px] lg:pt-[120px] xl:pt-[140px]  px-[24px]  gap-[24px]  sm:px-[40px]  md:px-[120px]  lg:px-[150px] xl:px-[0px] "
        >
          <div className="border-2 border-[#232323] xl:w-[383px]  xl:h-[]">
            {/* Title */}
            <h2 className="text-[18px] text-white font-thankslabs not-italic leading-[35px] font-bold mb-[30px] text-center sm:text-[21px] md:text-[24px] md:mb-[24px] lg:text-[28px] xl:text-[20px]">
              {men.title}
            </h2>

            {/* Image with inner shadow */}
            <div className="w-full   mb-[18px] md:mb-[56px] xl:mb-0">
              {men.img && (
                <div
                  className="relative h-[560px]  w-full rounded overflow-hidden"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)' }} // Inner shadow
                >
                  <Image src={men.img} alt={men.title} fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="py-[24px] px-[40px] xl:flex xl:flex-col xl:justify-center">
              <div className=" flex justify-center  ">
                {men.buttons?.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    onClick={() => handleButtonClick(button)}
                    className="bg-[rgba(137,129,85,0.15)] h-[] w-full  text-center border-2 border-[#898155] rounded text-white text-[14px]  py-[10px]   md:py-[16px]  md:text-[16px]"
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
