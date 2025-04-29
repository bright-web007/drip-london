import Image from 'next/image';
import { Button } from '@/components/ui/button';
import hostEvent from '@/assets/host-event.png';
import right from '@/assets/right-color.svg';
import left from '@/assets/left-color.png';

const Block14 = () => {
  return (
    <div className="bg-beige-400 py-16 xl:py-20">
      <div className="flex flex-col md:flex-row items-center  justify-between w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="bg-blau-500 relative w-[90%] mb-8 xl:mb-0 md:w-[45%] h-[400px] xl:h-[560px] rounded-t-[50%]">
          <Image
            src={hostEvent}
            alt="host Event"
            className="w-full h-full object-cover rounded-t-[50%] -mt-4 ml-4"
            width={400}
            height={400}
          />
        </div>
        <div className="text-[#898155] w-full md:w-[48%] mb-8 md:mb-0">
          <h1 className="text-2xl font-semibold leading-11 font-thankslabs">
            Host Your Event the Drip London Way
          </h1>
          <p className="font-monserrat text-sm leading-6 font-normal mt-6">
            Planning something special? From intimate dinners and milestone birthdays to corporate
            gatherings and stylish celebrations, our space transforms to fit your moment. With a
            dedicated team, curated menus, and an unforgettable atmosphere, we’ll help you turn any
            occasion into an extraordinary experience.
          </p>
          <div className="flex items-center mt-10">
            <Image src={left} alt="Drip London Logo" width={12} height={16} color="red" />
            <div className="border border-[#89815578] p-[2px] rounded-[2px]">
              <Button className="group bg-transparent border border-beige-500 hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-5 text-beige-500 hover:text-white  flex items-center justify-center transition-all duration-300">
                <span className="flex items-center space-x-1 ">
                  <span> Make a Reservation</span>
                  <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1.2rem] group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </span>
              </Button>
            </div>
            <Image src={right} alt="Drip London Logo" width={12} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block14;
