'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import downicon from '@/assets/icons-svg/arrow-down.svg';
import { LayoutHeader } from '@/components/LayoutHeader/LayoutHeader';
import { useRouter } from 'next/navigation';

const Block1 = () => {
  const router = useRouter();

  const handleScrollDown = () => {
    const el = document.getElementById('next-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col mt-[-72px] h-[950px] font-monserrat xl:h-[730px] bg-gray-500  relative ">
      <LayoutHeader />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[38px]  lg:gap-[50px]  xl:gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-[12px] text-center w-full  lg:gap-[20px]">
          <div className="gap-[14px] flex flex-col md:gap-[25px]  lg:gap-[45px] xl:gap-[25px]  xl:h-[230px] ">
            <p
              className="text-[16px] w-[200px] font-thankslabs bg-black/2 rounded-full text-white font-[300px] not-italic leading-[35px] mx-auto md:text-[20px]  md:leading-[59.097px]  lg:text-[22px]  xl:text-[16px] xl:leading-[78px] "
              
            >
              Experience
            </p>
            <p
              className="text-[42px] w-[800px] h-full bg-black/2 rounded-full font-thankslabs text-white  font-bold not-italic  mx-auto md:text-[60px]  lg:text-[70px]  xl:text-[80px]"
            
            >
              DRIP LONDON
            </p>
          </div>
          <div className="border-1 border-[#898155] w-[56.08px] h-[1px] my-[20px]  md:my-[24px]   lg:w-[80px]  xl:my-[4px]  xl:w-[94.691px]"></div>
          <div className="    md:px-[120px]  lg:px-[250px]  xl:px-[390px]  2xl:px-[480px]">
            <p className="text-[16px] w-[350px] font-monserrat font-sm text-white not-italic leading-[18px] sm:text-[18px]  md:text-[20px]  lg:text-[22px]  xl:text-[20px]  md:leading-[30.393px]  md:w-[493.037px]">
              Where bold West African Flavours meet modern culinary flair
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] w-full pr-[30px] pl-[30px] items-center  md:flex-row  justify-center">
          <Button
            onClick={() => {
              router.push('/reservation');
            }}
            className="bg-[#898155] h-[46px] w-[382px] p-[10px] text-[14px]  rounded-[4px]  sm:text-[15px]  md:h-[50px]  md:w-[290px]  "
          >
            Reserve Your Table
          </Button>

          <Button
            onClick={() => {
              router.push('/menu');
            }}
            className="bg-[rgba(137,129,85,0.21)] border-2 border-[#898155] h-[46px] w-[382px] p-[10px] rounded-[4px] text-[14px] sm:text-[15px]   md:h-[50px]  md:w-[290px]"
          >
            View Menu
          </Button>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer  xl:bottom-7"
          onClick={handleScrollDown}
        >
          <Image
            src={downicon}
            alt="arrow down icon"
            className="w-[32px] h-[32px]  md:w-[32px] md:h-[32px]  animate-bounce"
          />
        </div>
        <div className="h-[50px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]   xl:h-[65px]"></div>
      </div>
    </div>
  );
};

export default Block1;
