import React from 'react'
import Image from 'next/image'
import newsbg from '@/assets/background/latest-news-bg.jpg'

const Block19 = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[-72px]">
      <Image src={newsbg} alt="Menu" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0  flex flex-col items-center justify-center ">
        <h1 className="font-thankslabs font-bold text-[14px] sm:text-[22px] md:text-[32px] xl:text-[50px] text-white">
        PRIVATE DINING
        </h1>
        <h1 className="text-white">
        Designed for unforgettable celebrations.
        </h1>
      </div>
    </div>
  )
}

export default Block19