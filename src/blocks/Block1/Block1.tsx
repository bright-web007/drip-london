import { Button } from '@/components/ui/button';
import left from '@/assets/left-fly.svg';
import right from '@/assets/right-fly.svg';
import Image from 'next/image';
import bookTable from '@/assets/book-table.svg';
import followUs from '@/assets/follow-us.svg';
import { Icon } from '@iconify/react';

const Block1 = () => {
  return (
    <div className="flex flex-col mt-[-72px] font-monserrat bg-gray-700 h-[100vh] xl:h-[120vh] relative">
      <div className=" absolute inset-0 flex flex-col items-center justify-center">
        <h1 className=" text-[24px] md:text-[32px] xl:text-[50px] font-bold w-[80%] md:w-[75%] text-center text-white font-thankslabs">
          {' '}
          Welcome to DRIP LONDON
        </h1>
        <p className="text-[20px] text-white leading-6 font-normal w-[70%] md:w-[55%] text-center mt-8 mb-6">
          Drip London is a West African fusion restaurant in Central London that offers a unique
          immersive dining experience in a stylish atmosphere.
        </p>
        <div className="flex items-center">
          <Image src={left} alt="Drip London Logo" width={12} height={16} />
          <div className="border border-[#d9d9d9] p-[2px] rounded-[2px]">
            <Button className="group bg-transparent border border-white hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-2 text-white flex items-center justify-center transition-all duration-300">
              <span className="flex items-center space-x-1">
                <span>Book Now</span>
                <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1.2rem] group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </span>
            </Button>
          </div>
          <Image src={right} alt="Drip London Logo" width={12} height={16} />
        </div>
      </div>
      <div className=" absolute bottom-[5%] flex items-end justify-between w-full px-12">
        <Image src={followUs} alt="Follow us" width={20} height={310} />

        <div className="flex flex-col items-center justify-center mr-[-90px] ">
          <Icon icon="devicon:google" className="text-white w-14 h-14 cursor-pointer" />
          <div className="flex items-center mt-2">
            <p className="text-white text-sm font-medium mr-2">4.8</p>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Icon icon="fluent-color:star-16" key={index} className="w-3 h-3 " />
            ))}
          </div>
        </div>

        <Image src={bookTable} alt="Book table" width={120} height={120} />
      </div>
    </div>
  );
};

export default Block1;
