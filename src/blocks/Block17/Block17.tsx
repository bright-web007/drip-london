'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Block17 = () => {
  return (
    <div className="pr-[24px] pl-[24px] pb-[60px] md:pr-[36px] md:pl-[36px] md:pb-[60px] lg:pr-[70px] lg:pl-[70px] xl:pr-[120px] xl:pl-[120px] 2xl:pr-[235px] 2xl:pl-[235px]">
      <div className="relative h-[475px] md:flex w-[90%] sm:w-[89%] md:w-[97%] lg:w-[97%] xl:w-[85%] 2xl:w-[91%] mx-auto">
        {/* Overlay Card */}
        <div className="absolute  opacity-100 pr-[17.875px] pl-[18px] pb-[8px] pt-[9px] w-full h-[121px] md:h-[154px] md:pr-[391.875px] md:pl-[24px] md:pb-[25px] md:pt-[25px] z-10">
          <div className="w-full h-[104px] border rounded shadow p-2 text-sm font-sans bg-white md:w-[100%] xl:w-[60%]">
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

        {/* Embedded Google Map */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1229.729323395791!2d4.891306!3d52.375889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c4eafc5b55%3A0x0!2zNTLCsDIyJzMzLjIiTiA0wrA1MycyOC43IkU!5e0!3m2!1sen!2snl!4v1686065474410!5m2!1sen!2snl"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full rounded"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Block17;
