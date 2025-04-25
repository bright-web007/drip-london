'use client';
import { drinksMenu, foodMenu } from '@/helpers/data';
import Image from 'next/image';
import { useState } from 'react';
import food from '@/assets/food1.png';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Block13 = () => {
  const [menu, setMenu] = useState<string>('food');

  const renderSection = (title: string, items: typeof drinksMenu.cocktails) => (
    <div className="flex items-center mb-10" key={title}>
      <div className="flex items-center justify-center">
        <div className="-rotate-90 w-4 h-4 mt-30">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="w-[80%] ml-12">
        {menu === 'food' && (
          <p className="font-monserrat text-xs leading-5.5 text-[#6D6D6D] mb-12">
            A curated selection of artfully crafted small plates, designed to be shared and
            savoured. Each dish showcases bold flavours, seasonal ingredients, and thoughtful
            pairing.
          </p>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-6">
            <div className="">
              <h1 className="text-xs font-semibold mb-1.5">{item.title}</h1>
              <p className="font-monserrat text-xs text-[#6D6D6D]">{item.description}</p>
            </div>
            <p className="font-semibold text-sm">{item.price}</p>
          </div>
        ))}
      </div>
      <Image src={food} alt="food" width={400} height={400} />
    </div>
  );

  return (
    <div className="flex flex-col items-center mx-auto w-[90%] xl:w-[85%] 2xl:w-[75%] py-16 xl:py-20">
      {/* Tabs */}
      <div className="flex justify-center font-semibold font-thankslabs text-xs leading-7 py-16">
        <h1
          className={`mr-4 px-11 cursor-pointer py-1.5 ${menu === 'food' ? 'bg-beige-500 text-white' : 'bg-beige-400 text-beige-500'}`}
          onClick={() => setMenu('food')}
        >
          Food Menu
        </h1>
        <h1
          className={`mr-4 px-11 cursor-pointer py-1.5 ${menu === 'drinks' ? 'bg-beige-500 text-white' : 'bg-beige-400 text-beige-500'}`}
          onClick={() => setMenu('drinks')}
        >
          Drinks Menu
        </h1>
      </div>
      <div className="mt-8">
        {menu === 'drinks' ? (
          <div className="font-thankslabs text-beige-500 ">
            {Object.entries(drinksMenu).map(([key, value]) =>
              renderSection(capitalize(key), value)
            )}
          </div>
        ) : (
          <div className="font-thankslabs text-beige-500 ">
            {Object.entries(foodMenu).map(([key, value]) => renderSection(capitalize(key), value))}
          </div>
        )}
      </div>
      <section className="font-monserrat text-sm leading-5.5 text-center mt-4">
        <h1 className="text-black mb-8 w-[60%] mx-auto">
          Alongside our curated selection of signature creations, we are pleased to offer all the
          classic cocktails you know and love. Allow our bartenders to craft a timeless favourite,
          tailored to your taste.
        </h1>
        <p className="text-[#676767] w-[90%] mx-auto">
          Please inform your server of any allergies or dietary restrictions before ordering. While
          we take every precaution, we cannot guarantee the complete absence of allergens in any of
          our dishes. 12.5% discretionary service charge will be added to each bill.
        </p>
      </section>
    </div>
  );
};

export default Block13;
