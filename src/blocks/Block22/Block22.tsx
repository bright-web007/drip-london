'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import reservationBg from '@/assets/background/reservation-bg.webp';
import reserve from '@/assets/reserve.svg';
import { Button } from '@/components/ui/button';
import { formatDisplayDate } from './function';
import { acceptableIDs, dressSense, timeSlots } from '@/helpers/data';
import SearchProgress from '@/components/SearchProgress/SearchProgress';

const Block22 = () => {
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [timeIndex, setTimeIndex] = useState(0);
  const [searching, setSearching] = useState(false);
  const [progress, setProgress] = useState<number>(10);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSearch = () => {
    setSearching(true);
    setProgress(10);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setSearching(false), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const incrementDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const decrementDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const incrementGuests = () => {
    setGuests(prev => prev + 1);
  };

  const decrementGuests = () => {
    setGuests(prev => Math.max(1, prev - 1));
  };

  const incrementTime = () => {
    setTimeIndex(prev => Math.min(timeSlots.length - 1, prev + 1));
  };

  const decrementTime = () => {
    setTimeIndex(prev => Math.max(0, prev - 1));
  };

  const isPastDate = date <= today;

  return (
    <div className="relative w-full mt-[-72px]">
      {/* Background image positioned behind content */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={reservationBg}
          alt="reservation background"
          className="w-full h-full object-cover"
        />
      </div>

      {searching && <SearchProgress progress={progress} />}

      <div className="flex flex-col xl:flex-row items-center justify-between w-[90%] 2xl:w-[85%] pb-26 pt-40 xl:pb-30 xl:pt-45 mx-auto">
        {/* Left section */}
        <div className="text-[#F5F5F5] w-full xl:w-[45%]">
          <h1 className="font-thankslabs leading-11 md:leading-14 font-bold text-2xl md:text-[32px] xl:text-[40px] 2xl:text-[50px] text-white">
            Reserve a Table
          </h1>
          <p className="font-monserrat text-base font-medium py-8">
            Secure your spot at Drip London and indulge in an unforgettable dining experience.
            Whether it’s a casual meal or a special celebration, we’ve got the perfect table waiting
            for you.
          </p>

          <div className="font-monserrat">
            <h1 className="text-white text-xl font-semibold mb-1">Dress to impress</h1>
            {dressSense.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <Icon icon="oui:dot" className="text-white w-[6px] h-[6px]" />
                <p className="text-base font-light">{item}</p>
              </div>
            ))}
          </div>

          <div className="font-monserrat py-8">
            <h1 className="text-white text-xl font-semibold">ID is mandatory</h1>
            <h1 className="uppercase font-medium text-base my-4">ACCEPTABLE IDENTIFICATION:</h1>
            {acceptableIDs.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mt-1">
                <Icon icon="oui:dot" className="text-white w-[6px] h-[6px]" />
                <p className="text-base font-light">{item}</p>
              </div>
            ))}
            <h1 className="italic text-base font-normal mt-10 mb-14">
              Management have the right to refuse entry
            </h1>

            <div>
              <h1 className="text-white text-xl font-semibold mb-1">
                Can’t find a date and time? Contact us
              </h1>
              <h1 className="text-base font-normal my-2">
                Email: <span className="text-white font-semibold">Drip.London@Drip.london</span>
              </h1>
              <h1 className="text-base font-normal">
                Call us: <span className="text-white font-semibold">+44 0889 7894</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full xl:w-[45%]">
          <Image src={reserve} alt="reserve" className="w-full h-[380px] object-cover" />
          <div className="bg-white pb-2">
            {/* Date selector */}
            <div className="text-beige-500 w-[70%] mx-auto flex items-center justify-between py-6">
              <Icon
                icon="ep:arrow-left"
                className={`w-6 h-6 ${isPastDate ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={isPastDate ? undefined : decrementDate}
              />
              <div className="text-center">
                <h1 className="font-thankslabs text-sm md:text-xl font-semibold pb-3">
                  {formatDisplayDate(date)}
                </h1>
                <p className="font-monserrat text-xs md:text-base font-medium">Date</p>
              </div>
              <Icon
                icon="ep:arrow-right"
                className="w-6 h-6 cursor-pointer"
                onClick={incrementDate}
              />
            </div>
            <hr className="border-b-[0.5px] border-t-0 border-[#C2C2C2]" />

            {/* Guest selector */}
            <div className="text-beige-500 w-[70%] mx-auto flex items-center justify-between py-6">
              <Icon
                icon="ep:arrow-left"
                className="w-6 h-6 cursor-pointer"
                onClick={decrementGuests}
              />
              <div className="text-center">
                <h1 className="font-thankslabs text-sm md:text-xl font-semibold pb-3">{guests}</h1>
                <p className="font-monserrat text-xs md:text-base font-medium">Guests</p>
              </div>
              <Icon
                icon="ep:arrow-right"
                className="w-6 h-6 cursor-pointer"
                onClick={incrementGuests}
              />
            </div>
            <hr className="border-b-[0.5px] border-t-0 border-[#C2C2C2]" />

            {/* Time selector */}
            <div className="text-beige-500 w-[70%] mx-auto flex items-center justify-between py-6">
              <Icon
                icon="ep:arrow-left"
                className="w-6 h-6 cursor-pointer"
                onClick={decrementTime}
              />
              <div className="text-center">
                <h1 className="font-thankslabs text-sm md:text-xl font-semibold pb-3">
                  {timeSlots[timeIndex]}
                </h1>
                <p className="font-monserrat text-xs md:text-base font-medium">Time</p>
              </div>
              <Icon
                icon="ep:arrow-right"
                className="w-6 h-6 cursor-pointer"
                onClick={incrementTime}
              />
            </div>
            <hr className="border-b-[0.5px] border-t-0 border-[#C2C2C2]" />

            <div className="m-6">
              <Button
                onClick={handleSearch}
                className="bg-beige-500 shadow cursor-pointer text-white text-base font-medium w-full rounded-[2px] hover:bg-transparent border border-beige-500 hover:text-beige-500 py-6"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block22;
