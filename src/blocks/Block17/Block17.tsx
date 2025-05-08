'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const Block17 = () => {
  return (
    <div className="mx-auto w-[90%] xl:w-[75%] 2xl:w-[70%] pb-16 xl:pb-20 font-monserrat">
      <div className="relative h-[475px] md:flex">
        <div className="absolute bg-[rgba(21,21,21,0.55)] opacity-100 pr-[17.875px] pl-[18px] pb-[8px] pt-[9px] w-full h-[121px] md:h-[154px] md:pr-[391.875px] md:pl-[24px] md:pb-[25px] md:pt-[25px] z-10">
          <div className="w-[100%] h-[104px] border rounded shadow p-2 text-sm font-sans bg-white">
            <a
              href="https://www.google.com/maps?q=51.522306,-0.102333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm leading-none">51°31'20.3"N 0°06'08.4"W</p>
                  <p className="text-sm font-medium text-gray-600 mt-0.5">
                    27 Clerkenwell Rd, London EC1M 5RN
                  </p>
                </div>
                <div className="text-blue-600 text-base font-medium flex flex-col items-center gap-1">
                  <Icon icon="grommet-icons:directions" className="w-6 h-6" />
                  Directions
                </div>
              </div>
              <div className="mt-2 text-blue-700 text-base font-medium hover:underline">
                View larger map
              </div>
            </a>
          </div>
        </div>

                          <Image src={mapbg} alt="map" className="w-full h-full object-cover" />

        </div>

    </div>
  )
}

export default Block17;
