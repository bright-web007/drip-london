'use client';
import { useRouter } from 'next/navigation';
import { items } from '@/helpers/data';
import Image from 'next/image';

const Block3 = () => {
  const router = useRouter();

  const handleButtonClick = (button: any) => {
    if (button.actionType === 'navigate' && button.path) {
      router.push(button.path);
    }
  };

  return (
    <div className="bg-[#000000]">
      {items.map((item, index) => (
        <div key={index} className="pt-[100px]">
          {/* Title */}
          <h2 className="text-[18px] text-white font-thankslabs not-italic leading-[35px] font-bold mb-[30px] text-center">
            {item.title}
          </h2>

          {/* Image */}
          {item.img && (
            <Image
              src={item.img}
              alt={item.title}
              className="w-full max-w-md mb-[18px] h-[432px] rounded"
            />
          )}

          <div className="w-full px-[24px]">
            {/* Subtitle */}
            {item.subtitle && (
              <h3 className="font-semibold font-Montserrat text-[12px] mb-1 text-[#898155]">
                {item.subtitle}
              </h3>
            )}

            {/* Description */}
            <p className="font-Montserrat text-[16px] text-[#D5D5D5] mb-[24px]">{item.desc}</p>

            {/* Buttons */}
            <div className="w-full">
              {item.buttons?.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => handleButtonClick(button)}
                  className="bg-[rgba(137,129,85,0.15)] h-[46px] w-full px-4 py-2 border-2 border-[#898155] rounded text-white"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
