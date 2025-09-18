'use client';

import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMutation } from '@apollo/client/react';
import { CREATE_RESPONSE } from '@/lib/mutation';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
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

  const {
    register,
    handleSubmit,
    reset,
    formState: {},
    control,
  } = useForm<FormData>();
  const [createResponse, { loading }] = useMutation(CREATE_RESPONSE);

  const onSubmit = async (formData: FormData) => {
    try {
      const variables = {
        form_uuid: '0d2b6121-35df-46d9-8677-bb9095ee0c20',
        response: [
          {
            '15163b46-ebde-492e-80f0-aefea9252640': formData.name,
            '85e8e89a-444e-45e6-8a4f-ed5510c16396': formData.email,
            'b3fc32bb-15a5-4914-8360-97e4e3f97484': formData.phone,
            '2bafd8fb-25ec-4ba4-9d3c-82ed01870fa8': formData.message,
          },
        ],
      };

      const res = await createResponse({ variables });

      if (res.data) {
        toast.success('✅ Form submitted successfully! Your response has been recorded.');
        reset(); // clear form only on success
      } else {
        toast.error('⚠️ Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error(
        `❌ Submission failed: ${err instanceof Error ? err.message : 'Please try again later.'}`
      );
    }
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div data-aos="custom-fade-in" data-aos-delay="100">
            <label
              htmlFor="full-name"
              className="block mb-2 text-[12px] font-monserrat text-white leading-[18px] md:text-[14px] md:leading-[21px]"
            >
              Full Name
            </label>
            <input
              {...register('name', { required: true })}
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
              {...register('email', { required: true })}
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
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    country={'gb'}
                    enableSearch
                    value={field.value}
                    onChange={field.onChange}
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
                )}
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
              {...register('message', { required: true })}
              id="message"
              placeholder="Type your message"
              className="w-full h-[155px] mb-[24px] border-[rgba(44,44,44,0.29)] border bg-[#1E1E1E] rounded-md p-3 text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#898155] xl:mb-[12px] xl:h-[150px]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div data-aos="custom-fade-in" data-aos-delay="500">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[rgba(137,129,85,0.15)] border border-[#898155] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Block17;
