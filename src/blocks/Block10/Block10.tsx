import Image from 'next/image';
import { Icon } from '@iconify/react';
import steakArtboard from '@/assets/steak-artBoard.svg';
import { processes } from '@/helpers/data';

const Block10 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto w-[90%] xl:w-[85%] 2xl:w-[75%] py-16 xl:py-20">
      <Image
        src={steakArtboard}
        alt="steak"
        width={400}
        height={400}
        className="w-full md:w-[30%] xl:w-[48%] h-[270px] md:h-[210px] xl:h-[500px] mb-8 xl:mb-0"
      />
      <div className="w-full xl:w-[48%]">
        {processes.map((process, index) => (
          <div
            className={`text-beige-500 flex items-start ${index !== 2 && 'mb-12'} ${index === 1 ? 'ml-0 md:ml-16' : ''}`}
            key={index}
          >
            <Icon icon="ic:sharp-square" className="rotate-40 mr-2 w-6 h-6" />
            <div>
              <h1 className="text-xs leading-6 font-thankslabs font-semibold mb-2">
                {process.title}
              </h1>
              <p className="font-monserrat text-sm leading-6">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block10;
