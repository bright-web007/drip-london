'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const Block17 = () => {
  return (
    <div className="pr-[24px] pl-[24px] pb-[60px]    md:pr-[36px] md:pl-[36px] md:pb-[60px] lg:pr-[70px] lg:pl-[70px]    xl:pr-[120px] xl:pl-[120px]   2xl:pr-[235px] 2xl:pl-[235px] ">
      <div className="relative h-[475px]  md:flex w-[90%] sm:w-[89%] md:w-[97%] lg:w-[97%]  xl:w-[85%] 2xl:w-[91%] mx-auto">
        <div className="absolute bg-[rgba(21,21,21,0.55)] opacity-100  pr-[17.875px] pl-[18px] pb-[8px] pt-[9px] w-full h-[121px]   md:h-[154px]  md:pr-[391.875px] md:pl-[24px] md:pb-[25px] md:pt-[25px]">
          <div className="w-[100%] h-[104px] border rounded shadow p-2 text-sm font-sans bg-white ">
            <a
              href="https://www.google.com/maps?q=52.375889,4.891306"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium leading-none">52°22'33.2"N 4°53'28.7"E</p>
                  <p className="text-xs text-gray-600 mt-0.5">9VGR+9G3 Amsterdam, Netherlands</p>
                </div>
                <div className="text-blue-600 text-xs font-medium flex items-center gap-1">
                  <ArrowUpRight size={14} className="mt-0.5" />
                  Directions
                </div>
              </div>

              <div className="mt-2 text-blue-700 text-xs hover:underline">View larger map</div>
            </a>
          </div>
        </div>

        <Image src={mapbg} alt="map" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Block17;
