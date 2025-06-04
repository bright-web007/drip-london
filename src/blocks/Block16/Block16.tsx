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
      <div className="grid">
        {contact.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden p-[24px] shadow-md border-b-2 border-[#161616] contact-card"
            style={
              {
                '--card-bg-image': `url(${gradient.src})`,
              } as React.CSSProperties
            }
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

            <h3 className="text-[13px] font-normal font-thankslabs mb-[12px] leading-[22px] md:text-[14px] xl:text-[16px]">
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
            ) : item.subtitle === 'Dress Code' ? (
              <p className="text-[13px] font-normal font-monserrat leading-[22px] md:text-[14px] xl:text-[16px]">
                Our dress code is Smart Elegant, we kindly invite guests to reflect the dress code.
                We encourage smart shoes. To avoid disappointment please refrain from wearing
                sportswear, hats, hoodies, beachwear shorts and sandals. <br />
                Please note management reserves the right to refuse entry.
              </p>
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
