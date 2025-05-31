'use client';

import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Block17 = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="pr-[24px] pl-[24px] pt-[49px]  bg-[black] md:pr-[32px] md:pl-[32px] md:pt-[49px]  xl:h-[703px] xl:w-[441px] xl:mt-[97px] 2xl:w-[641px]">
      <div className="p-[24px] rounded-[4px] border-2 border-[rgba(110,110,110,0.15)] space-y-6  bg-[rgba(13,13,13,0.53)] md:p-[28px]">
        <h1 className="flex flex-col text-[16px] font-thankslabs leading-[28px] text-[#898155] font-normal mb-[24px]  md:text-[18px] xl:mb-[12px]">
         <span> Got Questions? </span>
         <span> You can contact us</span>
        </h1>
      <div>
        <label htmlFor="full-name" className="block mb-2 text-[12px] font-monserrat text-[#FFFFFF] leading-[18px] md:text-[14px] md:leading-[21px]">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Enter your full name"
          className="w-full h-[42px] md:h-[50px] border-[rgba(44,44,44,0.29)] mb-[24px] border bg-[rgba(197,198,203,0.53)] rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[38px]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-[12px] font-monserrat text-[#FFFFFF] md:text-[14px] md:leading-[21px]">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="w-full h-[42px] md:h-[50px] border-[rgba(44,44,44,0.29)] border bg-[rgba(197,198,203,0.53)] rounded-md p-3 mb-[24px] text-white focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[38px]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-[12px] font-monserrat text-[#FFFFFF] md:text-[14px] md:leading-[21px]">Phone Number</label>
        <div className="mb-10 h-[42px]  md:h-[50px] xl:mb-5">
        <PhoneInput
          country={'gb'}
          enableSearch
          containerStyle={{ width: '100%' }}
          inputStyle={{
            width: '100%',
            height:'100%',
            backgroundColor: 'rgba(197,198,203,0.53)',
            color: 'white',
            border: isFocused
              ? '1px solid #898155'
              : '1px solid rgba(44,44,44,0.29)',
            boxShadow: isFocused ? '0 0 0 1px #898155' : 'none',
            borderRadius: '0.375rem',
            paddingLeft: '48px',
            paddingTop: '12px',
            paddingBottom: '12px',
            fontSize: '14px',
            outline: 'none',
          }}
          buttonStyle={{
            backgroundColor: 'rgba(197,198,203,0.53)',
            border: 'none',
            borderTopLeftRadius: '0.375rem',
            borderBottomLeftRadius: '0.375rem',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-[12px] font-monserrat text-[#FFFFFF] md:text-[14px] md:leading-[21px]">Your Message</label>
        <textarea
          id="message"
          placeholder="Type your message"
          className="w-full h-[155px] mb-[24px] border-[rgba(44,44,44,0.29)] border bg-[rgba(197,198,203,0.53)] rounded-md p-3 text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[150px]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full  bg-[rgba(137,129,85,0.15)] border border-[#898155] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
      >
        Submit Message
      </button>
    </div>
    </div>

  );
};

export default Block17;
