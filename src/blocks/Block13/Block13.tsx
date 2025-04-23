'use client';
import { useState } from 'react';

const Block13 = () => {
  const [menu, setMenu] = useState<string>('food');
  return (
    <div>
      <div className="flex justify-center font-semibold  font-thankslabs text-xs leading-7 py-16">
        <h1
          className={`mr-4 px-11 cursor-pointer py-1.5 ${menu === 'food' ? 'bg-beige-500 text-white' : 'bg-beige-400  text-beige-500'}`}
          onClick={() => setMenu('food')}
        >
          Food Menu
        </h1>
        <h1
          className={`mr-4 px-11 cursor-pointer py-1.5 ${menu === 'drinks' ? 'bg-beige-500 text-white' : 'bg-beige-400  text-beige-500'}`}
          onClick={() => setMenu('drinks')}
        >
          Drinks Menu
        </h1>
      </div>
    </div>
  );
};

export default Block13;
