import React from 'react'
import map from '@/assets/map.png'
import mapbg from '@/assets/map-bg.png'
import Image from 'next/image'

const Block17 = () => {
  return (
    <div className="pr-[24px] pl-[24px] pb-[60px]    md:pr-[36px] md:pl-[36px] md:pb-[60px] lg:pr-[70px] lg:pl-[70px]    xl:pr-[120px] xl:pl-[120px]   2xl:pr-[235px] 2xl:pl-[235px] ">

        <div className="relative h-[475px]">

          <div className="absolute bg-[rgba(21,21,21,0.55)] opacity-100  pr-[17.875px] pl-[18px] pb-[8px] pt-[9px] w-full h-[121px]   md:h-[154px]  md:pr-[391.875px] md:pl-[24px] md:pb-[25px] md:pt-[25px]">
              <div className="md:h-[104px]">
                   <Image src={map} alt="map point" className="h-full"/>
              </div>
          </div>

          <Image src={mapbg} alt="map" className="w-full h-full object-cover" />

        </div>

    </div>
  )
}

export default Block17