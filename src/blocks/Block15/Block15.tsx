'use client';

import React from 'react';
import Image from 'next/image';
import contactbg from '@/assets/background/contact-bg.jpg';
import arrowdown from '@/assets/icons-svg/arrow-down.svg';
import { CalendarDays, Clock, User } from 'lucide-react';
import OpenTable from '@/assets/OpenTable.png';
import info from '@/assets/icons-svg/info-circle.svg';

const Block15 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[760px] sm:h-[800px] overflow-hidden mt-[-72px]">
      {/* Background Image */}
      <Image
        src={contactbg}
        alt="Menu"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        fill
        priority
      />

      {/* Overlay & Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
        <h1 className="font-thankslabs text-center text-[41.77px] leading-[58px] uppercase mb-[60px] md:leading-[90px] font-bold md:text-[60px] lg:text-[70px]  2xl:text-[70px] xl:leading-[90px] xl:w-[938px] text-white mx-4 md:mx-0">
          MAKE A RESERVATION
        </h1>

        {/* Reservation Box */}
        <div className="w-[382px] mx-auto bg-white overflow-hidden mb-[18px]  md:w-[647px]  xl:w-[855px]">
          {/* Input Row */}
          <div className="flex flex-row items-center justify-between border-b">
            {/* People */}
            <div className="flex items-center w-full p-3 border-r border-[#DDDDDD] md:w-[215.6667px]">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              <select className="w-full bg-transparent text-gray-800 focus:outline-none">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex items-center w-full p-3 border-r border-[#DDDDDD] md:w-[215.6667px]">
              <CalendarDays className="w-5 h-5 mr-2 text-gray-500" />
              <input
                type="date"
                className="w-full bg-transparent text-gray-800 focus:outline-none"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time */}
            <div className="flex items-center w-full p-3 md:w-[215.6667px]">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <select className="w-full bg-transparent text-gray-800 focus:outline-none ">
                <option>6:00pm</option>
                <option>6:30pm</option>
                <option>7:00pm</option>
                <option>7:30pm</option>
                <option>8:00pm</option>
                <option>8:30pm</option>
                <option>9:00pm</option>
                <option>9:30pm</option>

              </select>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full h-[46px] md:h-[58px] bg-[#898155] text-white font-semibold text-center py-4 hover:bg-[#7d754e] transition-colors">
            Find a Table
          </button>
        </div>

        {/* OpenTable Logo */}
        <div className="mb-[20px] xl:mb-[60px]">
          <Image
            src={OpenTable}
            alt="open table"
            className="w-[113.841px] h-[25.67px]"
          />
        </div>
      </div>

      {/* Info Box - Positioned above the arrow */}
      <div className="absolute bottom-[85px] w-full flex justify-center">
        <div className="flex gap-[16px] blur(6px) bg-[rgba(17,17,17,0.30)] border border-[#2B2B2B] py-[24px] px-[12px] w-[382px]  md:w-[647px]  xl:w-[855px]">
          <Image src={info} alt="info icon" />
          <p className="text-[13px] text-gray-300 leading-[17px] md:text-[15.5px]">
            For reservations of 12 and above please contact us directly on{' '}
            <a
              href="mailto:reservations@drip.london"
              className="text-[#898155] text-[13px] underline hover:text-[#a3996c] md:text-[15.5px]"
            >
              reservations@drip.london
            </a>
          </p>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <button onClick={handleScroll} aria-label="Scroll to next section">
          <Image
            src={arrowdown}
            alt="Scroll down"
            className="w-[24px] h-[24px] sm:w-[45px] sm:h-[45px] md:w-[40px] md:h-[40px] animate-bounce"
          />
        </button>
      </div>

      {/* Bottom Shadow Blur Line */}
      <div className="h-[55px] w-[4334px] border-2 border-[black] absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
    </div>
  );
};

export default Block15;
