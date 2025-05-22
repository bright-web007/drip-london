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
    <div className="flex flex-col mt-[-72px] font-monserrat bg-gray-500 h-[100vh] xl:h-[105vh] relative ">
      <LayoutHeader />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[38px]  lg:gap-[50px]  xl:gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-[12px] text-center w-full  lg:gap-[29px]">
          <div className="gap-[14px] flex flex-col md:gap-[25px]  lg:gap-[45px]">
            <p className="text-[16px] font-thankslabs text-white font-[300px] not-italic leading-[35px] self-stretch md:text-[20px]  md:leading-[59.097px]  lg:text-[22px]  xl:text-[24px]" style={{ textShadow: '2px 2px 6px black' }}>
              Experience
            </p>
            <p className="text-[42px] font-thankslabs text-white  font-bold not-italic leading-[45.685px] self-stretch md:text-[60px]  lg:text-[70px]  xl:text-[80px]"  style={{ textShadow: '2px 2px 6px black' }}>
              DRIP LONDON
            </p>
          </div>
          <div className="border-1 border-[#898155] w-[56.08px] h-[1px] my-[20px]  md:my-[24px]  xl:my-[33.77px] lg:w-[80px]  xl:w-[94.691px]"></div>
          <div className="px-[50px]  sm:px-[150px]  md:px-[120px]  lg:px-[250px]  xl:px-[350px]">
            <p className="text-[16px] font-monserrat font-medium text-white not-italic leading-[18px] sm:text-[18px]  md:text-[20px]  lg:text-[22px]  xl:text-[24px]">
              Where bold West African Flavours meet modern culinary flair
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] w-full pr-[30px] pl-[30px]   md:flex-row  lg:justify-center">
          <Button
            onClick={() => {
              router.push('/reservation');
            }}
            className="bg-[#898155] h-[46px] p-[10px] text-[14px]  rounded-[4px]  sm:text-[15px]  md:h-[60px]  md:w-[356.7461px]  lg:text-[16.5px]  xl:text-[18px]"
          >
            Reserve Your Table
          </Button>

          <Button
            onClick={() => {
              router.push('/menu');
            }}
            className="bg-[rgba(137,129,85,0.21)] border-2 border-[#898155] h-[46px] p-[10px] rounded-[4px] text-[14px] sm:text-[15px]   md:h-[60px]  md:w-[356.7461px]  lg:text-[16.5px]  xl:text-[18px]"
          >
            View Menu
          </Button>
        </div>

        <div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
        >
          <Image
            src={downicon}
            alt="arrow down icon"
            className="w-[32px] h-[32px]  md:w-[32px] md:h-[32px]"
          />
        </div>
        <div className="h-[55px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[15.75px] bg-[black]"></div>
      </div>
    </div>
  );
};

export default Block1;
