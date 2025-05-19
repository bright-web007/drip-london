import Image from 'next/image';
import { dishes } from '@/helpers/data';

const Block2 = () => {
  return (
    <section id="next-section" className="bg-[#000000] py-12 px-6 w-full h-full ">
      <h2 className="text-white text-[18px] font-thankslabs mb-6 text-center">World of Flavors</h2>

      {/* Scrollable wrapper */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        {/* Inner flex container that scrolls */}
        <div className="flex gap-[12px] w-[300px] px-2">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="w-[300px] bg-[#000000] border border-[#1D1D1D] rounded-lg  text-white flex-shrink-0 ] bg-[length:30px_30px] bg-[radial-gradient(#1D1D1D_0.5px,transparent_5px)]"
            >
              <Image
                src={dish.img}
                alt={dish.title}
                className="rounded-md mb-[34px] h-[192px] w-full object-cover"
              />
              <div className="flex flex-col text-center px-[50px] mb-[30px] gap-[8px]">
                <h3 className="text-[14px] font-thankslabs mb-2">{dish.title}</h3>
                <p className="text-[14px] font-monserrat">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
