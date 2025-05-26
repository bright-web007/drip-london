import Image from 'next/image';
import { dishes } from '@/helpers/data';

const Block2 = () => {
  return (
    <section
      id="next-section"
      className="bg-[#000000] py-12 px-6 w-full h-full md:py-[25px] md:px-[40px] lg:py-[70px] xl:py-[60px] xl:px-[100px]"
    >
      <h2 className="text-white text-[18px] font-thankslabs mb-6 text-center sm:text-[26px] md:text-[28px] md:mb-[56px]  xl:mb-[40px] lg:text-[28px] xl:text-[32px]">
        World of Flavors
      </h2>

      {/* Scrollable wrapper */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        {/* Inner flex container that scrolls */}
        <div className="flex gap-[12px] w-max px-2">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="w-[300px] h-[375px] pb-[30px] bg-[#000000] border border-[#191919] rounded-[4px] text-white flex-shrink-0 bg-[length:30px_30px] bg-[radial-gradient(#1D1D1D_0.5px,transparent_5px)] sm:w-[480px] sm:h-[480px] md:w-[464px] md:h-[482px] xl:h-[570px]  xl:w-[480px]"
            >
              {/* Image with bottom overlay text */}
              <div className="relative h-[220px] mb-[34px] sm:h-[300px]  xl:h-[400px] md:mb-[56.5px] rounded-[4px] overflow-hidden">
                <Image src={dish.img} alt={dish.title} className="w-full h-full object-cover" />
                <div className="h-[47px] w-[809px] absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 blur-[9.75px] bg-black"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col text-center px-[50px] mb-[30px] gap-[16px] sm:px-[90px] md:mb-[50.5px] md:px-[40px] md:gap-[8px]">
                <h3 className="text-[14px] text-[#cfcfcf] font-thankslabs sm:text-[20px] md:text-[17px]">
                  {dish.title}
                </h3>
                <p className="text-[11px] text-[#cfcfcf] font-normal font-monserrat sm:text-[16px] md:px-[40px] xl:text-[18px]">
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
