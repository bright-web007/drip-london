import React from 'react';
import Image from 'next/image';
import { contact } from '@/helpers/data';
import gradient from '@/assets/background/gradient-bg.jpg';

const Block16 = () => {
  return (
    <section
      className="py-[80px]  bg-[black] text-[#D5D5D5] w-full xl:w-[781px] 2xl:w-[981px]"
      id="next"
    >
      <h2 className="text-[18px] font-normal font-thankslabs mb-6 text-center leading-[35px] md:text-[20pxs] xl:text-left  xl:text-[32px]  xl:leading-[44px]">
        Reservation Guidelines
      </h2>
      <div className="grid gap-4">
        {contact.map((item, index) => (
          <div
            key={index}
            className="p-[24px] shadow-md border-b-2 border-[#161616] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `
            linear-gradient(0deg, rgba(137, 129, 85, 0.06), rgba(137, 129, 85, 0.06)),
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
            url(${gradient.src})
          `,
              backgroundBlendMode: 'overlay, normal',
              backgroundColor: '#898155',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              filter: 'saturate(60%)',
            }}
          >
            <div className="mb-[20px]">
              <Image
                src={item.image}
                alt={item.subtitle}
                width={26}
                height={25.056}
                className="rounded"
              />
            </div>

            <h3 className="text-[13px] font-normal font-thankslabs mb-[12px] leading-[22px]  md:text-[14px]  xl:text-[16px]">
              {item.subtitle}
            </h3>

            {item.subtitle === 'Group Bookings' ? (
              <ul className="list-disc list-inside text-[13px] font-normal font-monserrat leading-[22px] md:text-[14px] xl:text-[16px]">
                <li>
                  Reservations of fewer than 12 guests are welcome to dine from our à la carte menu.
                </li>
                <li>
                  Groups of 12 or more will be offered a specially curated set menu by our chef.
                </li>
              </ul>
            ) : (
              <p className="text-[13px] font-normal font-monserrat leading-[22px] md:text-[14px] xl:text-[16px]">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Block16;
