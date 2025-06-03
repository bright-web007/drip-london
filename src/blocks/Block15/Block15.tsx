'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import contactbg from '@/assets/background/contact-bg.jpg';
import arrowdown from '@/assets/icons-svg/arrow-down.svg';
import { CalendarDays, Clock, User } from 'lucide-react';
import OpenTable from '@/assets/OpenTable.png';
import info from '@/assets/icons-svg/info-circle.svg';

const Block15 = () => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('6:00pm');

  const handleScroll = () => {
    const nextSection = document.getElementById('next');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timeOptions = [
    '6:00pm',
    '6:30pm',
    '7:00pm',
    '7:30pm',
    '8:00pm',
    '8:30pm',
    '9:00pm',
    '9:30pm',
  ];

  const handleRedirect = () => {
    const restaurantId = process.env.NEXT_PUBLIC_RESTAURANT_ID; // Your OpenTable restaurant ID

    // Convert 12-hour time (e.g. 6:30pm) to 24-hour format (e.g. 18:30)
    const [hourStr, minPeriod] = time.split(':');
    const minutes = minPeriod.slice(0, 2);
    const period = minPeriod.slice(2).toLowerCase();

    let hour = parseInt(hourStr, 10);
    if (period === 'pm' && hour !== 12) hour += 12;
    if (period === 'am' && hour === 12) hour = 0;
    const hourFormatted = hour.toString().padStart(2, '0');

    const datetime = `${date}T${hourFormatted}:${minutes}`;
    const url = `${process.env.NEXT_PUBLIC_OPENTABLE_URL}${restaurantId}&datetime=${datetime}&covers=${guests}`;

    window.open(url, '_blank'); // Open in new tab
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
        <h1 className="font-thankslabs text-center text-[41.77px] leading-[58px] uppercase mb-[60px] md:leading-[90px] font-bold md:text-[60px] lg:text-[70px] 2xl:text-[70px] xl:leading-[90px] xl:w-[938px] text-white mx-4 md:mx-0">
          MAKE A RESERVATION
        </h1>

        {/* Reservation Box */}
        <div className="w-[400px] max-w-[855px]  bg-white overflow-hidden mx-auto  mb-[18px] md:w-[647px] xl:w-[855px]">
          <div className="flex flex-row items-center justify-between border-b">
            {/* Guests */}
            <div className="flex items-center w-full p-3 border-r border-[#DDDDDD] md:w-[215.6667px]">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              <select
                className="w-full bg-transparent  focus:outline-none text-[12px] font-monserrat "
                value={guests}
                onChange={e => setGuests(e.target.value)}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 2}>{i + 2}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex items-center w-full p-3 border-r border-[#DDDDDD] md:w-[215.6667px]">
              <CalendarDays className="w-5 h-5 mr-2 text-gray-500" />
              <input
                type="date"
                className="w-full bg-transparent text-gray-800 focus:outline-none text-[12px] font-monserrat"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>

            {/* Time */}
            <div className="flex items-center w-full p-3 md:w-[215.6667px]">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <select
                className="w-full bg-transparent text-gray-800 focus:outline-none text-[12px] font-monserrat"
                value={time}
                onChange={e => setTime(e.target.value)}
              >
                {timeOptions.map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleRedirect}
            className="w-full h-[46px] md:h-[58px] bg-[#898155] text-white font-semibold text-center py-4 hover:bg-[#7d754e] transition-colors"
          >
            Find a Table
          </button>
        </div>

        {/* OpenTable Logo */}
        <div className="mb-[20px] xl:mb-[60px]">
          <Image src={OpenTable} alt="open table" className="w-[113.841px] h-[25.67px]" />
        </div>
      </div>

      {/* Info Box */}
      <div className="absolute bottom-[85px] w-full flex justify-center">
        <div className="flex gap-[16px] bg-[rgba(17,17,17,0.30)] border border-[#2B2B2B] py-[24px] px-[12px] w-[400px] max-w-[855px]">
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

      {/* Bottom Shadow Blur */}
      <div className="h-[55px] w-[4334px] border-2 border-[black] absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 blur-[11.75px] bg-[black]"></div>
    </div>
  );
};

export default Block15;
