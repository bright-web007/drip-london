import Image from 'next/image';
import eggs from '@/assets/eggs.svg';
import { Button } from '@/components/ui/button';
import right from '@/assets/right-color.svg';
import left from '@/assets/left-color.png';

import gift from '@/assets/icons-svg/gift.svg';
import chef from '@/assets/icons-svg/chef.svg'

const Block12 = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between mx-auto w-[90%] xl:w-[75%] 2xl:w-[70%] py-16 xl:py-20">
      <div className="bg-beige-400 relative flex items-center h-[450px] w-full xl:w-[58%] mb-[20px] xl:mb-0 overflow-hidden">
        <Image
          src={eggs}
          alt="deals"
          width={400}
          height={400}
          className="object-cover h-[450px] w-[45%]"
        />
        <div className="font-thankslabs text-beige-500 flex flex-col gap-[6px]  items-center  w-[180px]   sm:w-[290px]  md:w-full    xl:gap-[12px]">
          <p className="text-[6.5px] leading-[20px]  sm:text-[11px]  md:text-[12px]   xl:text-[10px]">Experience Drip London’s</p>
          <h1 className="uppercase text-[11px] leading-[30.967px] font-bold    sm:text-[18px]   md:text-[20px]  xl:text-[15px]">Buttomless Brunch</h1>
          <p className="text-[7px] leading-[20px]  sm:text-[11px]  md:text-[12px]  xl:text-[10px]">Every Sunday 5-9pm</p>
          <div className="flex items-center ">
            <Image src={left} alt="Drip London Logo" width={12} height={16} color="red" />
            <div className="border border-[#89815578] p-[2px] rounded-[2px]">
              <Button className="group  bg-transparent border border-beige-500 hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-5 text-beige-500  flex items-center justify-center transition-all duration-300">
                <span className="flex items-center space-x-1 font-monserrat">
                  <span className="text-[6px]  xl:text-[14px]">Book your brunch table</span>
                  <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1.2rem] group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </span>
              </Button>
            </div>
            <Image src={right} alt="Drip London Logo" width={12} height={16} />
          </div>
        </div>
        <div className="absolute inset-0 border border-beige-500 m-6" />
      </div>
      <div className="flex flex-col items-center justify-between h-[450px] w-full xl:w-[38%]">
        <div className="bg-beige-400 relative flex items-center justify-center w-full h-[215px] overflow-hidden">
          <div className="font-thankslabs text-beige-500 flex flex-col items-center justify-center">
            <Image src={gift} alt="gift" width={50} height={50} className="w-12 h-12" />
            <p className="text-xs leading-6 font-medium   sm:text-">£55pp</p>
            <p className="text-xs leading-6 font-medium ">90 Minutes Unlimited</p>
            <h1 className=" text-base leading-9 font-medium">Cocktail</h1>
          </div>
          <div className="absolute inset-0 border border-beige-500 m-6" />
        </div>
        <div className="bg-beige-400 relative flex items-center justify-center w-full h-[215px] overflow-hidden">
          <div className="font-thankslabs text-beige-500 flex flex-col items-center justify-center">
            <Image src={chef} alt="gift" width={50} height={50} className="w-12 h-12" />
            <p className="text-xs leading-6 font-medium ">£45pp</p>
            <p className="text-xs leading-6 font-medium ">90 Minutes Unlimited</p>
            <h1 className=" text-base leading-9 font-medium">Prosecco</h1>
          </div>
          <div className="absolute inset-0 border border-beige-500 m-6" />
        </div>
      </div>
    </div>
  );
};

export default Block12;
