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
      className="bg-[#000000] py-[120px]  md:py-[63px]  xl:flex  xl:gap-[24px] justify-center  xl:py-[20px] xl:px-[121px]"
      id="next"
    >
      {mens.map((men, index) => (
        <div
          key={index}
          className="pt-[0px] lg:pt-[120px] xl:pt-[100px]   px-[24px]  gap-[24px]  sm:px-[40px]  md:px-[120px]  lg:px-[150px] xl:px-[0px] "
        >
          <div className=" lg:w-[720px]  xl:w-[383px] mb-[120px]   xl:mb-[160px]">
            {/* Title */}
            <h2 className="text-[18px] text-white font-thankslabs not-italic leading-[35px] font-bold mb-[30px] text-center sm:text-[21px] md:text-[24px] md:mb-[24px]  lg:text-[28px]  lg:mb-[50px] xl:text-[18px] xl:mb-[25px]">
              {men.title}
            </h2>
     

            <div className="border-2 border-[#232323] rounded-[4px]">
            {/* Image with inner shadow */}
            <div className="w-full   mb-[18px] md:mb-[56px] xl:mb-0">
              {men.img && (
                <div
                  className="relative h-[412px]  w-full rounded overflow-hidden  md:h-[450px]  lg:h-[600px]  xl:h-[400px]"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)' }} // Inner shadow
                >
                  <Image src={men.img} alt={men.title} fill className="object-cover" />
                  <div className="h-[55px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="py-[24px] px-[30px] xl:flex  md:pt-[10px] md:pb-[25px] lg:pt-[2px] xl:flex-col xl:justify-center">
              <div className=" flex justify-center  ">
                {men.buttons?.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    onClick={() => handleButtonClick(button)}
                    className="bg-[rgba(137,129,85,0.15)] font-normal w-full  text-center border-1 border-[#3d3926] rounded-[4px] text-white text-[18px]  py-[18px]   md:py-[16px]  md:text-[20px]"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
