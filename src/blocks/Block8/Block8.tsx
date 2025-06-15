import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Block8 = () => {
  return (
    <div className="bg-beige-400 py-16 xl:py-20">
      <div className=" flex  flex-col md:flex-row items-center justify-between mx-auto w-[90%] xl:w-[85%] 2xl:w-[75%]">
        <Image
          src="https://drip-london1.s3.eu-north-1.amazonaws.com/spag-artboard.webp"
          alt="Spaghetti"
          width={400}
          height={400}
          className="w-full md:w-[48%] h-[350px] xl:h-[500px] mb-4 lg:mb-0"
        />
        <div className="text-beige-500 w-full md:w-[48%]">
          <h1 className="font-thankslabs font-semibold text-xl mb-6 xl:mb-8 md:text-2xl xl:text-3xl leading-8 md:leading-11 xl:leading-15">
            Curated Experiences in an Atmosphere You’ll Love
          </h1>
          <p className="font-monserrat text-sm font-normal leading-6">
            At Drip London, we’re redefining what it means to dine out. Whether you’re joining us
            for a relaxed brunch, a romantic dinner, or a big night out with friends, every moment
            is curated to deliver unforgettable memories. Expect a vibrant space, attentive service,
            and a menu that brings global flavors together with finesse.
          </p>
          <div className="flex items-center mt-10">
            <Image
              src="https://drip-london1.s3.eu-north-1.amazonaws.com/left-color.webp"
              alt="Drip London Logo"
              width={12}
              height={16}
              color="red"
            />
            <div className="border border-[#89815578] p-[2px] rounded-[2px]">
              <Button className="group bg-transparent border border-beige-500 hover:bg-beige-500 text-sm cursor-pointer rounded-[2px] px-6 py-5 text-beige-500  flex items-center justify-center transition-all duration-300">
                <span className="flex items-center space-x-1 group-hover:text-white">
                  <span> More Info</span>
                  <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1.2rem] group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </span>
              </Button>
            </div>
            <Image
              src="https://drip-london1.s3.eu-north-1.amazonaws.com/right-color.webp"
              alt="Drip London Logo"
              width={12}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block8;
