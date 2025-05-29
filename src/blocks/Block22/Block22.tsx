// pages/booking.tsx
"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { ArrowLeft } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import group from '@/assets/icons-svg/Group.svg'
import arrow from '@/assets/icons-svg/arrow-side.svg'
import facebook from '@/assets/icons-svg/logos_facebook.svg'
import google from '@/assets/icons-svg/devicon_google.svg'
import apple from '@/assets/icons-svg/devicon_apple.svg'
import reservation from '@/assets/background/reservation-bg.jpg'
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ChevronDown } from "lucide-react"
import { Listbox } from '@headlessui/react';
import calender from '@/assets/icons-svg/calendar.svg'

const steps = ["Personal", "Event", "Additional Info", "Success"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: new Date(),
    startTime: "12:00",
    endTime: "15:00",
    members: 2,
    notes: ""
  });
  const [errors, setErrors] = useState<any>({});

  const eventTypes = [
    { id: 1, name: "Select Event Type" },
    { id: 2, name: "Birthday Party" },
    { id: 3, name: "Christmas Party" },
    { id: 3, name: "Get Together" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const validateStep = () => {
    let err: any = {};
    if (step === 2) {
      if (!/^[A-Za-z]+$/.test(formData.firstName)) err.firstName = "Invalid first name";
      if (!/^[A-Za-z]+$/.test(formData.lastName)) err.lastName = "Invalid last name";
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) err.email = "Invalid email";
      if (!/^[0-9]{10,14}$/.test(formData.phone)) err.phone = "Invalid phone number";
    }
    if (step === 3) {
      if (!formData.eventType) err.eventType = "Event type is required";
      if (!formData.eventDate) err.eventDate = "Event date is required";
      if (!formData.startTime) err.startTime = "Start time is required";
      if (!formData.endTime) err.endTime = "End time is required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (step === 5 || validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const submitBooking = async () => {
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        nextStep();
      } else {
        alert("Failed to submit booking");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const BookingHeader = () => (
    <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 text-white mb-6 shadow-md">
      <div className="flex items-center mb-6 space-x-2 cursor-pointer" onClick={prevStep}>
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Go Back</span>
      </div>

      <h2 className="text-2xl font-serif mb-6 tracking-wide">Event Details</h2>

      <div className="flex justify-between">
        {steps.map((label, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center text-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mb-1
                ${idx + 1 <= step ? "bg-yellow-400" : "border border-gray-400"}`}
            >
              {idx + 1 < step ? (
                <span className="w-2 h-2 rounded-full bg-black" />
              ) : null}
            </div>
            <span className={`text-xs ${idx + 1 === step ? "text-yellow-400" : "text-gray-400"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto  mt-[-72px] relative h-[90vh] overflow-hidden ">
      <Image
        src={reservation}
        alt="contact background"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      {step > 1 && <BookingHeader />}

      {step === 1 && (
        <div className="space-y-4 absolute inset-0  flex flex-col items-center justify-center">
          <h1 className="text-center text-[41.77px] font-thankslabs leading-[58px] text-[#FFF] mb-[32px]">
            Book an Event
            </h1>
           
          <div className="flex flex-col gap-[4px] items-center">
          <p className="text-center text-[13px] font-monserrat leading-[19.5px] text-[#FFF] mb-[12px]">
            Fill Booking Form Using:
            </p>

          <button className="w-full py-[12px] px-[24px] flex items-center justify-center  gap-[12px] text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm">
          <Image
             src={google}
             alt="google" 
             width={20} height={20}
             />
            <span>Google</span>
            </button>

          <button className="w-full py-[12px] px-[24px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm">
          <Image
             src={apple}
             alt="apple"
             width={20} height={20} 
             />
           <span>Apple</span> 
            </button>

          <button className="w-full py-[12px] px-[24px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm">
          <Image
             src={facebook}
             alt="facebook"
             width={20} height={20} 
             />
            <span>Facebook</span>
            </button>

          <p className="text-center text-[13px] font-monserrat leading-[19.5px] text-[#FFF] my-[12px]">or</p>
          
           
          <button className="w-full py-[12px] px-[12px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm" onClick={nextStep}>
          <Image
             src={group}
             alt="group"
             width={20} height={20} 
             />
            <span>Enter Your Details Manually</span>
            <Image
             src={arrow}
             alt="group"
             width={20} height={20} 
             />
            </button>
        
          </div>
        </div>
      )}


{step === 2 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 z-10">
          <div className=" bg-black/40 backdrop-blur-sm p-[24px]">
            <div className="w-full flex items-center justify-start mb-4">
              <button onClick={prevStep} className="flex items-center text-white gap-2">
                <ArrowLeft className="w-[24px] h-[24px]" />
                <span className="text-[12px] text-[#969696]">Go Back</span>
              </button>
            </div>

            <h2 className="text-white text-[14px] font-normal mb-4 font-thankslabs">Personal Information</h2>

            <div className="space-y-4 w-full max-w-md">
              {["firstName", "lastName", "email", "phone"].map((name) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-white text-sm mb-1">
                    {name === "phone" ? "Phone Number" : name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>

                  {name === "phone" ? (
                    <PhoneInput
                    country={"gb"}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: false
                    }}
                    enableSearch
                    inputStyle={{
                      width: "334px",
                      height: "42px",
                      padding: "12px 12px 12px 48px", // left padding for flag
                      borderRadius: "6px",
                      border: "1px solid rgba(197,198,203,0.53)",
                      backgroundColor: "rgba(44,44,44,0.42)",
                      color: "#fff",
                      fontSize: "14px"
                    }}
                    buttonStyle={{
                      border: "none",
                      backgroundColor: "transparent",
                      left: "12px"
                    }}
                    containerStyle={{
                      width: "334px"
                    }}
                    dropdownStyle={{
                      backgroundColor: "#222",
                      color: "black",
                      border: "1px solid #555"
                    }}
                  />
                  
                  ) : (
                    <input
                      id={name}
                      className="w-[334px] h-[42px] p-[12px] rounded border border-[rgba(197,198,203,0.53)] text-[#fff] bg-[rgba(44,44,44,0.42)]"
                      name={name}
                      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                      value={formData[name as keyof typeof formData] as string}
                      onChange={handleChange}
                    />
                  )}
                  {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                </div>
              ))}
            </div>

            <div className="flex justify-center w-full mt-6">
              <button className="bg-[rgba(44,44,44,0.42)] w-full border border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-semibold" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}


      {step === 3 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 z-10">
          <div className="border-2 border-[red] p-[24px]">
          <div className="w-full flex items-center justify-start mb-4">
              <button onClick={prevStep} className="flex items-center text-white gap-2">
                <ArrowLeft className="w-[24px] h-[24px]" />
                <span className="text-[12px] text-[#969696]">Go Back</span>
              </button>
            </div>

            <div className="relative w-[334px]">
  <label htmlFor="eventType" className="block text-white text-sm mb-1">
    Event Type
  </label>

  <Listbox
    value={formData.eventType}
    onChange={(value) => setFormData({ ...formData, eventType: value })}
  >
    <div className="relative">
      <Listbox.Button className="relative w-full cursor-pointer rounded border border-[rgba(197,198,203,0.53)] bg-[rgba(44,44,44,0.42)] py-2 pl-4 pr-10 text-left text-white focus:outline-none">
        <span className="block truncate">
          {formData.eventType || "Select Event Type"}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="w-4 h-4 text-white" />
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-black text-white border border-[rgba(197,198,203,0.53)] py-1 text-sm shadow-lg">
        {eventTypes.map((event) => (
          <Listbox.Option
            key={event.id}
            value={event.name}
            className={({ active }) =>
              `cursor-pointer select-none relative py-[12px] pl-10 pr-4 ${
                active ? "bg-[#898155]" : ""
              }`
            }
          >
            {({ selected }) => (
              <>
                <span className={`block truncate ${selected ? "font-bold" : ""}`}>
                  {event.name}
                </span>
                {selected && (
                  <span className="absolute left-3 top-2 text-yellow-400">
                    ✓
                  </span>
                )}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>

  {errors.eventType && (
    <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
  )}
</div>

<div>
  <label className="flex mb-1 text-white">Event Date</label>

  <div className="relative w-[334px]">
    <DatePicker
      selected={formData.eventDate}
      onChange={(date) => setFormData({ ...formData, eventDate: date as Date })}
      className="w-[334px] p-2 pr-10 border text-white bg-[rgba(44,44,44,0.42)]"
    />
    <Image
      src={calender}
      alt="calendar"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
    />
  </div>

  {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate}</p>}
</div>

        <div className="flex gap-[12px]">
          <div>
            <label className="block mb-1 text-white">Start Time</label>
            <TimePicker
              onChange={(time) => setFormData({ ...formData, startTime: time as string })}
              value={formData.startTime}
              disableClock
              className="w-[161px] h-[42px] text-white bg-[rgba(44,44,44,0.42)] rounded-[4px]"
            />
          </div>
          {errors.startTime && <p className="text-red-500 text-sm">{errors.startTime}</p>}

          <div>
            <label className="block mb-1 text-white">End Time</label>
            <TimePicker
              onChange={(time) => setFormData({ ...formData, endTime: time as string })}
              value={formData.endTime}
              disableClock
              className="w-[161px] h-[42px] text-white bg-[rgba(44,44,44,0.42)] rounded-[4px]"
            />
          </div>
          {errors.endTime && <p className="text-red-500 text-sm">{errors.endTime}</p>}

        </div>

          <label>
            Number of Members: {formData.members}
            <input
              type="range"
              min={2}
              max={12}
              value={formData.members}
              onChange={(e) => setFormData({ ...formData, members: Number(e.target.value) })}
            />
          </label>

          <div className="flex justify-between">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <textarea
            className="w-full p-2 border"
            name="notes"
            placeholder="Add more info (optional)"
            value={formData.notes}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <button onClick={prevStep}>Back</button>
            <button onClick={submitBooking}>Next</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold">You've successfully booked an event for Drip London!</h2>
          <div className="space-x-4">
            <button className="p-2 bg-red-500 text-white" onClick={() => setStep(1)}>Book Again</button>
            <button className="p-2 bg-gray-300">Return to Home Page</button>
            <button className="p-2" onClick={prevStep}>Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
}