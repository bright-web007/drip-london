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

        {/* Embedded Google Map */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1985.7220147104345!2d-0.102333!3d51.522306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1686065474410!5m2!1sen!2suk"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full rounded"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Block17;
