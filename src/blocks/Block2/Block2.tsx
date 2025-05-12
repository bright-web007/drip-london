import Image from 'next/image';
import forkKnife from '@/assets/fork-knife.svg';
import drinks from '@/assets/drinks.jpg';
import main from '@/assets/main.jpg';
import dessert from '@/assets/dessert.jpg';

const Block2 = () => {
  return (
    <div className="flex flex-col items-center bg-white py-20">
      <div className="flex flex-col items-center mx-auto w-[90%] md:w-[70%] xl:w-[60%]">
        <Image src={forkKnife} alt="Drip London Logo" width={48} height={60} />
        <h1 className="text-sm xl:text-xl font-semibold leading-8 xl:leading-10 text-center my-12 text-beige-500 font-thankslabs">
          Step into Drip London, where elevated dining meets electric nightlife. From mouth-watering
          meals to curated cocktails and DJ-fueled evenings, every visit is an experience to savour.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto gap-y-4 md:gap-x-4">
        {[
          { src: drinks, alt: 'Drinks' },
          { src: main, alt: 'Main' },
          { src: dessert, alt: 'Dessert' },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group w-[95%] md:w-[430px] h-[430px] md:h-[280px] lg:h-[490px]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                width={400}
                height={400}
              />

              <div className="absolute inset-0 border border-beige-300 rounded-[1px] m-6 pointer-events-none" />

              <div className="absolute inset-0 bg-[#8B4513]/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

              <div
                className="absolute left-1/2 transform -translate-x-1/2 text-white text-lg md:text-sm xl:text-xl font-bold z-10 transition-all duration-500 ease-in-out
                        bottom-10 group-hover:bottom-1/2 group-hover:translate-y-1/2 capitalize text-center font-thankslabs"
              >
                {item.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block2;
