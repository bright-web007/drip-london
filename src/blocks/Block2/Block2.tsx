import Image from 'next/image';
import { dishes } from '@/helpers/data';

const Block2 = () => {
  return (
    <section
      id="next-section"
      className="bg-[#000000] py-12 px-6 w-full h-full   md:py-[25px]  md:px-[40px]  lg:py-[70px]   xl:py-[25px]"
    >
      <h2 className="text-white text-[18px] font-thankslabs mb-6 text-center  sm:text-[21px]  md:text-[24px]  md:mb-[56px]  lg:text-[28]  xl:text-[32px]">
        World of Flavors
      </h2>

      {/* Scrollable wrapper */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        {/* Inner flex container that scrolls */}
        <div className="flex gap-[12px] w-[300px] px-2  md:w-[464px]">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="w-[300px] bg-[#000000] border border-[#1D1D1D] rounded-lg  text-white flex-shrink-0 ] bg-[length:30px_30px] bg-[radial-gradient(#1D1D1D_0.5px,transparent_5px)]  sm:w-[400px]  md:w-[464px] "
            >
              <Image
                src={dish.img}
                alt={dish.title}
                className="rounded-md mb-[34px] h-[192px] w-full object-cover sm:h-[250px]   md:h-[300px]  md:mb-[56.5px]"
              />
              <div className="flex flex-col text-center px-[50px] mb-[30px] gap-[8px]  sm:px-[90px]  md:mb-[50.5px]  md:px-[60px]">
                <h3 className="text-[14px] font-thankslabs mb-2  sm:text-[16px]   md:text-[17px]  md:mb-[8px] ">
                  {dish.title}
                </h3>
                <p className="text-[14px] font-monserrat  sm:text-[16px]   md:px-[40px]">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
