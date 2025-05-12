'use client';
import Image from 'next/image';
import drinks1 from '@/assets/drinks1.jpeg';
import drinks2 from '@/assets/drinks2.jpeg';
import drinks3 from '@/assets/drinks3.jpg';
import right from '@/assets/right-color.svg';
import left from '@/assets/left-color.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Block4 = () => {
  const router = useRouter();
  return (
    <div className="bg-beige-400 py-16 xl:py-20">
      <div className="w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="flex  flex-col md:flex-row items-center  justify-between">
          <div className="text-[#898155] w-full md:w-[48%] mb-8 md:mb-0">
            <h1 className="text-2xl font-semibold leading-11 font-thankslabs">
              Private Dining and Events
            </h1>
            <p className="font-monserrat text-sm leading-6 font-normal mt-6">
              At Drip London we transform events into vibrant celebrations of connection and
              culture. Our immersive West African fusion restaurant offers more than just a meal —
              it’s an experience. From bold, unforgettable flavours to the soulful sounds of live DJ
              sets and passionate performances, every detail is designed to spark joy and leave a
              lasting impression.
            </p>
            <div className="flex items-center mt-10">
              <Image src={left} alt="Drip London Logo" width={12} height={16} color="red" />
              <div className="border border-[#89815578] p-[2px] rounded-[2px]">
                <Button
                  onClick={() => {
                    router.push('/reservation');
                  }}
                  className="group bg-transparent border border-beige-500 hover:text-white hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-5 text-beige-500  flex items-center justify-center transition-all duration-300"
                >
                  <span className="flex items-center space-x-1">
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
          <div className="border-5 border-white w-full md:w-[48%] group overflow-hidden">
            <Image
              src={drinks1}
              alt="People eating"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8 md:mt-20">
          <div className="border-5 border-white w-full md:w-[48%] group overflow-hidden mt-8 md:mt-0">
            <Image
              src={drinks2}
              alt="People eating"
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={400}
              height={400}
            />
          </div>
          <div className="text-beige-500 w-full md:w-[48%]">
            <h1 className="text-2xl font-semibold leading-11 font-thankslabs">
              A Stylish, Flexible Venue for Every Occasion
            </h1>
            <p className="font-monserrat text-sm leading-6 font-normal mt-6">
              Set across two floors, it is a versatile space and can accommodate a range of private
              events, from large, seateddinners, private celebrations and privately hired intimate
              club.
            </p>

            <p className="font-monserrat text-sm leading-6 font-normal mt-6">
              All spaces can be adapted to meet the specific event requirements with options of
              photo shoots, dry hire, Christmas events, Media/TV locations, product launches, group
              meetings and pre-dinner events.
            </p>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row items-center  justify-between  mt-8 md:mt-20">
          <div className="text-[#898155] w-full md:w-[48%] mb-8 md:mb-0">
            <h1 className="text-2xl font-semibold leading-11 font-thankslabs">
              Brunch. But Make it Drip
            </h1>
            <p className="font-monserrat text-sm leading-6 font-normal mt-6">
              Every Sunday from 5PM to 9PM, indulge in bold, flavorful plates crafted to excite your
              palate, paired with bottomless pours of wine, cocktails, or whatever you fancy. Let
              the high-energy vibes, good company, and curated sounds carry you into the new week
              feeling refreshed, full, and alive.
            </p>
            <div className="flex flex-col gap-[24px] pt-[24px] pb-[15px]">
              <h1 className="text-[14px] font-monserrat">The Experience:</h1>
              <div className="h-[54px] border-b-2 border-[rgba(181,140,103,0.37)] pt-[16px] pb-[16px] pr-[12px] pl-[12px]">
                <p className="text-[12px] text-[#898155] font-thankslabs not-italic leading-[22px]   md:text-[10px]   lg:text-[12px]">
                  £55pp: 90 Minutes unlimited Cocktails
                </p>
              </div>
              <div className="h-[54px] border-b-2 border-[rgba(181,140,103,0.37)] pt-[16px] pb-[16px] pr-[12px] pl-[12px]">
                <p className="text-[12px] text-[#898155] font-thankslabs not-italic leading-[22px]   md:text-[10px]   lg:text-[12px]">
                  £45pp: 90 Minutes unlimited Prosecco
                </p>
              </div>
            </div>
            <div className="flex items-center mt-10">
              <Image src={left} alt="Drip London Logo" width={12} height={16} color="red" />
              <div className="border border-[#89815578] p-[2px] rounded-[2px]">
                <Button className="group bg-transparent border border-beige-500 hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-5 text-beige-500  flex items-center justify-center transition-all duration-300">
                  <span className="flex items-center space-x-1">
                    <span> Book a Brunch Table</span>
                    <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1.2rem] group-hover:opacity-100 transition-all duration-300">
                      →
                    </span>
                  </span>
                </Button>
              </div>
              <Image src={right} alt="Drip London Logo" width={12} height={16} />
            </div>
          </div>
          <div className="border-5 border-white w-full md:w-[50%] group overflow-hidden">
            <Image
              src={drinks3}
              alt="drinks"
              className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
