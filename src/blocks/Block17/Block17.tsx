import React from 'react'
import map from '@/assets/map.png'
import mapbg from '@/assets/map-bg.png'
import Image from 'next/image'

const Block17 = () => {
  return (
    <div className="pr-[24px] pl-[24px] pb-[60px]">

        <div className="relative h-[475px] ">

          <div className="absolute bg-[rgba(21,21,21,0.55)] opacity-100  pr-[17.875px] pl-[18px] pb-[8px] pt-[9px]">
              <div className="">
                   <Image src={map} alt="Geo point"/>
              </div>
          </div>

          <Image src={mapbg} alt="map" className="w-full h-full object-cover" />

        </div>

    </div>
  )
}

export default Block17