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
    <div className="flex flex-col mt-[-72px] font-monserrat bg-gray-500 h-[100vh] xl:h-[105vh] relative">
      <LayoutHeader />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[38px]">
        <div className="flex flex-col items-center justify-center gap-[12px] text-center w-full">
          <div className="gap-[12px] flex flex-col">
            <p className="text-[16px] font-thankslabs text-white">Experience</p>
            <p className="text-[39.159px] font-thankslabs text-white">DRIP LONDON</p>
          </div>
          <div className="border-2 border-[#898155] w-[56.08px] h-[1px] my-2"></div>
          <div className="pr-[50px] pl-[50px]">
            <p className="text-[16px] font-monserrat text-white">
              Where bold West African Flavours meet modern culinary flair
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] w-full pr-[30px] pl-[30px]">
          <Button
            onClick={() => {
              router.push('/reservation');
            }}
            className="bg-[#898155] h-[46px] p-[10px]"
          >
            Reserve your table
          </Button>

          <Button
            onClick={() => {
              router.push('/menu');
            }}
            className="bg-[#898155] h-[46px] p-[10px]"
          >
            View Menu
          </Button>
        </div>

        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
        >
          <Image src={downicon} alt="arrow down icon" />
        </div>
      </div>
    </div>
  );
};

export default Block1;
