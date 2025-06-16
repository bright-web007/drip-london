'use client';

import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block17 = () => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div
      className="pr-[24px] pl-[24px] pt-[0px] pb-[150px] bg-black md:pr-[32px] md:pl-[32px] md:pt-[29px] xl:h-[703px] xl:w-[441px] xl:mt-[114px] 2xl:w-[641px]"
      data-aos="fade-up"
    >
      <div className="p-[24px] rounded-[4px] border-2 border-[rgba(110,110,110,0.15)] space-y-6 bg-[rgba(13,13,13,0.53)] md:p-[28px]">
        <h1
          className="flex flex-col text-[16px] font-thankslabs leading-[28px] text-[#898155] font-normal mb-[34px] md:text-[18px] xl:mb-[34px]"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <span>Got Questions?</span>
          <span>You can contact us</span>
        </h1>

        {/* Full Name */}
        <div data-aos="custom-fade-in" data-aos-delay="100">
          <label
            htmlFor="full-name"
            className="block mb-2 text-[12px] font-monserrat text-white leading-[18px] md:text-[14px] md:leading-[21px]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            className="w-full h-[52px] md:h-[50px] border-[rgba(44,44,44,0.29)] mb-[24px] border bg-[#1E1E1E] rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[52px]"
          />
        </div>

        {/* Email */}
        <div data-aos="custom-fade-in" data-aos-delay="200">
          <label
            htmlFor="email"
            className="block mb-2 text-[12px] font-monserrat text-white md:text-[14px] md:leading-[21px]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full h-[52px] md:h-[50px] border-[rgba(44,44,44,0.29)] border bg-[#1E1E1E] rounded-md p-3 mb-[24px] text-white focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[52px]"
          />
        </div>

        {/* Phone */}
        <div data-aos="custom-fade-in" data-aos-delay="300">
          <label
            htmlFor="phone"
            className="block mb-2 text-[12px] font-monserrat text-white md:text-[14px] md:leading-[21px]"
          >
            Phone Number
          </label>
          <div className="mb-15 h-[42px] md:h-[50px] xl:mb-5">
            <PhoneInput
              country={'gb'}
              enableSearch
              containerStyle={{ width: '100%' }}
              inputStyle={{
                width: '100%',
                height: '52px',
                backgroundColor: '#1E1E1E',
                color: 'white',
                border: isFocused ? '1px solid #898155' : '1px solid rgba(44,44,44,0.29)',
                boxShadow: isFocused ? '0 0 0 1px #898155' : 'none',
                borderRadius: '0.375rem',
                paddingLeft: '48px',
                paddingTop: '12px',
                paddingBottom: '12px',
                fontSize: '14px',
                outline: 'none',
              }}
              buttonStyle={{
                backgroundColor: '#1E1E1E',
                border: 'none',
                borderTopLeftRadius: '0.375rem',
                borderBottomLeftRadius: '0.375rem',
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>

        {/* Message */}
        <div data-aos="custom-fade-in" data-aos-delay="400">
          <label
            htmlFor="message"
            className="block mb-2 text-[12px] font-monserrat text-white md:text-[14px] md:leading-[21px]"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message"
            className="w-full h-[155px] mb-[24px] border-[rgba(44,44,44,0.29)] border bg-[#1E1E1E] rounded-md p-3 text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[150px]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div data-aos="custom-fade-in" data-aos-delay="500">
          <button
            type="submit"
            className="w-full bg-[rgba(137,129,85,0.15)] border border-[#898155] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block17;
