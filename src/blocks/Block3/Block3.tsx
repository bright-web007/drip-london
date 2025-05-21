'use client';
import { useRouter } from 'next/navigation';
import { items } from '@/helpers/data';
import Image from 'next/image';
import type { Button } from '@/helpers/data';

const Block3 = () => {
  const router = useRouter();

  const handleButtonClick = (button: Button) => {
    if (button.actionType === 'navigate' && button.path) {
      router.push(button.path);
    }
  };

  return (
    <div className="bg-[#000000]">
      {items.map((item, index) => (
        <div key={index} className="pt-[100px] lg:pt-[120px] xl:pt-[140px]">
          {/* Title */}
          <h2 className="text-[18px] text-white font-thankslabs not-italic leading-[35px] font-bold mb-[30px] text-center sm:text-[21px] md:text-[24px] md:mb-[56px] lg:text-[28px] xl:text-[32px]">
            {item.title}
          </h2>

          {/* Image + Content Wrapper with Conditional Flex Direction */}
          <div
            className={`xl:flex xl:items-center xl:gap-[40px] ${
              index === 1 ? 'xl:flex-row-reverse' : ''
            }`}
          >
            {/* Image with inner shadow */}
            <div className="w-full xl:w-[976px] mb-[18px] md:mb-[56px] xl:mb-0">
              {item.img && (
                <div
                  className="relative h-[432px] md:h-[693px] xl:h-[693px] w-full rounded overflow-hidden"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)' }} // Inner shadow
                >
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="w-full px-[24px] md:px-[40px] xl:w-[800px] xl:px-[82px] xl:flex xl:flex-col xl:justify-center">
              {item.subtitle && (
                <h3 className="font-semibold font-Montserrat text-[12px] mb-1 text-[#898155] sm:text-[14px] md:text-[16px]">
                  {item.subtitle}
                </h3>
              )}

              <p className="font-Montserrat text-[16px] text-[#D5D5D5] mb-[24px] sm:text-[18px] md:text-[20px]">
                {item.desc}
              </p>

              <div className="w-full">
                {item.buttons?.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    onClick={() => handleButtonClick(button)}
                    className="bg-[rgba(137,129,85,0.15)] h-[46px] w-full px-4 py-2 border-2 border-[#898155] rounded text-white text-[14px] sm:text-[15px] md:text-[16px] md:py-[16px] md:h-[54px]"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
