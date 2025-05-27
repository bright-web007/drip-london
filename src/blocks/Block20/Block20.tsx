import React from 'react'
import { proof } from '@/helpers/data';
import Image from 'next/image';


const Block20 = () => {
  return (
    <section className="py-12 px-6 bg-black text-white font-thankslabs"id="next" >
      <h2 className="text-center text-[#D5D5D5] text-[18px] flex flex-col mb-[33px] leading-[28px] font-normal">
         <span>Elevated</span>
         <span>Dining Experiences</span>
      </h2>
      <div className="grid gap-[33px] md:grid-cols-2">
        {proof.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center rounded-[4px]">
            <div className="w-full h-[264px] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="h-[55px] w-[4334px] border-2 border-[black]  absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[15.75px] bg-[black]"></div>
            </div>
            <div className="px-[16px] py-[16px] bg-[rgba(137,129,85,0.15)]">
            <h3 className="text-[14px] font-thankslabs text-[#D5D5D5] font-light leading-[35px]">{item.title}</h3>
            <p className="text-[12px] text-[#A5A5A5] font-monserrat leading-[17px] font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Block20