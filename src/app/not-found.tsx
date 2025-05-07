import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className=" bg-[#afa4a4] w-full h-[70vh]  mt-[-72px] flex items-center justify-center ">
      <div className="bg-[white] border-4 shadow-lg border-[white] h-[50%] w-[50%] flex flex-col justify-center  place-items-center ">
        <h1 className="font-thankslabs  text-[70px]  text-beige-500  md:text-[80px]   lg:text-[85px]   xl:text-[95px]">
          404
        </h1>

        <p className="font-thankslabs  text-[10px]  text-beige-500 mb-[10px]   md:text-[15px]    xl:text-[10px]">
          -NOT FOUND -
        </p>

        <Link
          href="/"
          className="px-4 py-2 border-2  bg-beige-500 text-[white] rounded-md hover:bg-beige-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default page;
