// pages/booking.tsx
'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { ArrowLeft } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import group from '@/assets/icons-svg/Group.svg';
import arrow from '@/assets/icons-svg/arrow-side.svg';
import facebook from '@/assets/icons-svg/logos_facebook.svg';
import google from '@/assets/icons-svg/devicon_google.svg';
import apple from '@/assets/icons-svg/devicon_apple.svg';
import reservation from '@/assets/background/reservation-bg.jpg';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ChevronDown } from 'lucide-react';
import { Listbox } from '@headlessui/react';
import calender from '@/assets/icons-svg/calendar.svg';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';

const Block22 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: new Date(),
    startTime: '6:30',
    endTime: '12:00',
    members: '2',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const eventTypes = [
    { id: 1, name: 'Select Event Type' },
    { id: 2, name: 'Birthday Party' },
    { id: 3, name: 'Christmas Party' },
    { id: 4, name: 'Get Together' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    eventType?: string;
    eventDate?: string;
    startTime?: string;
    endTime?: string;
  };

  const validateStep = () => {
    const err: FormErrors = {};
    if (step === 2) {
      if (!/^[A-Za-z]+$/.test(formData.firstName)) err.firstName = 'Invalid first name';
      if (!/^[A-Za-z]+$/.test(formData.lastName)) err.lastName = 'Invalid last name';
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) err.email = 'Invalid email';
      if (!/^[0-9]{10,14}$/.test(formData.phone)) err.phone = 'Invalid phone number';
    }
    if (step === 3) {
      if (!formData.eventType) err.eventType = 'Event type is required';
      if (!formData.eventDate) err.eventDate = 'Event date is required';
      if (!formData.startTime) err.startTime = 'Start time is required';
      if (!formData.endTime) err.endTime = 'End time is required';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (step === 5 || validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const BookingHeader = () => (
    <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 text-white mb-6 shadow-md">
      <div
        className="flex items-center mb-6 space-x-2 cursor-pointer md:mb-[28px]"
        onClick={prevStep}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Go Back</span>
      </div>

      <h2 className="text-2xl font-serif mb-6 tracking-wide">Event Details</h2>
    </div>
  );

  return (
    <div className="w-full mx-auto mt-[-72px] relative h-[90vh] overflow-hidden xl:h-[100vh]">
      <Image
        src={reservation}
        alt="contact background"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      {step > 1 && <BookingHeader />}

      {step === 1 && (
        <div className="space-y-4 absolute inset-0  flex flex-col items-center justify-center">
          <h1 className="text-center text-[41.77px] font-thankslabs leading-[58px] text-[#FFF] mb-[32px] sm:text-[45px] sm:mb-[36px]  xl:text-[80px]  xl:mb-[45px]">
            Book an Event
          </h1>

          <div className="flex flex-col gap-[4px] items-center">
            <p className="text-center text-[14px] font-monserrat leading-[19.5px] text-[#FFF] mb-[12px] sm:text-[18px] xl:text-[27.5px]  xl:mb-[18px]">
              Fill Booking Form Using:
            </p>

            <button className="w-full py-[12px] px-[24px] flex items-center justify-center  gap-[12px] text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm  sm:text-[18px] sm:py-[15px]  xl:w-[900px] xl:h-[80.4637px] xl:text-[24.445px]">
              <Image
                src={google}
                alt="google"
                width={20}
                height={20}
                className="xl:h-[37px] xl:w-[37px]"
              />
              <span>Google</span>
            </button>

            <button className="w-full py-[12px] px-[24px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm  sm:text-[18px] sm:py-[15px]  xl:w-[900px] xl:h-[80.4637px] xl:text-[24.445px]">
              <Image
                src={apple}
                alt="apple"
                width={20}
                height={20}
                className="xl:h-[37px] xl:w-[37px]"
              />
              <span>Apple</span>
            </button>

            <button className="w-full py-[12px] px-[24px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm  sm:text-[18px] sm:py-[15px]  xl:w-[900px] xl:h-[80.4637px] xl:text-[24.445px]">
              <Image
                src={facebook}
                alt="facebook"
                width={20}
                height={20}
                className="xl:h-[37px] xl:w-[37px]"
              />
              <span>Facebook</span>
            </button>

            <p className="text-center text-[13px] font-monserrat leading-[19.5px] text-[#FFF] my-[12px] sm:text-[16px]">
              or
            </p>

            <button
              className="w-full py-[12px] px-[12px] flex gap-[12px] items-center justify-center  text-[#FFF] text-[14px] font-monserrat leading-[21px] bg-black/30 backdrop-blur-sm  sm:text-[18px]  sm:py-[15px]  xl:w-[900px] xl:h-[80.4637px] xl:text-[24.445px]  hover:border-[#898155]"
              onClick={nextStep}
            >
              <Image
                src={group}
                alt="group"
                width={20}
                height={20}
                className="xl:h-[37px] xl:w-[37px] "
              />
              <span className="text-[12px] font-monserrat sm:text-[18px]">
                Enter Your Details Manually
              </span>
              <Image
                src={arrow}
                alt="group"
                width={20}
                height={20}
                className="xl:h-[29px] xl:w-[29px] "
              />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 z-10">
          <div className=" bg-black/40 backdrop-blur-sm p-[24px]  xl:h-[831.6544px]  xl:w-[530px] xl:p-[36px]">
            <div className="w-full flex items-center justify-start mb-4 md:mb-[28px]">
              <button onClick={prevStep} className="flex items-center text-white gap-2  ">
                <ArrowLeft className="w-[24px] h-[24px]" />
                <span className="text-[12px] font-monserrat text-[#969696]">Go Back</span>
              </button>
            </div>

            <h2 className="text-white text-[14px] font-normal mb-[24px] font-thankslabs  sm:text-[18px] sm:mb-[28px]">
              Personal Information
            </h2>

            <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-[24px] sm:mb-[26px]">
              {/* <!-- Step 1 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                {/* Right Line */}
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {/* Step Circle */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center z-10
        ${
          formData.firstName && formData.lastName && formData.email && formData.phone
            ? 'bg-[#898155] text-black border border-[#898155]'
            : 'bg-black border-2 border-[#898155]'
        }`}
                >
                  {formData.firstName && formData.lastName && formData.email && formData.phone ? (
                    <FaCheck className="w-3 h-3" />
                  ) : (
                    <div className="w-2 h-2 bg-[#898155] rounded-full"></div>
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`mt-2 text-xs text-center ${
                    formData.firstName && formData.lastName && formData.email && formData.phone
                      ? 'text-[#898155]'
                      : 'text-[#898155]'
                  }`}
                >
                  Personal
                </span>
              </div>

              {/* <!-- Step 2 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Event</span>
              </div>

              {/* <!-- Step 3 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Additional Info</span>
              </div>

              {/* <!-- Step 4 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Success</span>
              </div>
            </div>

            <div className="space-y-4 w-full max-w-md xl:mb-[55px] xl:text-[18px]">
              {['firstName', 'lastName', 'email', 'phone'].map(name => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-white text-[12px] font-monserrat mb-1 sm:text-[16px]"
                  >
                    {name === 'phone'
                      ? 'Phone Number'
                      : name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>

                  {name === 'phone' ? (
                    <PhoneInput
                      country={'gb'}
                      value={formData.phone}
                      onChange={phone => setFormData({ ...formData, phone })}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                      }}
                      enableSearch
                      inputStyle={{
                        width: '100%',
                        height: '42px',
                        padding: '12px 12px 12px 48px', // left padding for flag
                        borderRadius: '6px',
                        border: '1px solid rgba(197,198,203,0.53)',
                        backgroundColor: 'rgba(44,44,44,0.42)',
                        color: '#fff',
                        fontSize: '16px',
                      }}
                      buttonStyle={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        left: '12px',
                      }}
                      containerStyle={{
                        width: '100%',
                      }}
                      dropdownStyle={{
                        backgroundColor: '#222',
                        color: 'black',
                        border: '1px solid #555',
                      }}
                      containerClass="w-full sm:w-[334px] xl:w-[569.8115px]"
                    />
                  ) : (
                    <input
                      id={name}
                      className="w-[334px] h-[42px] p-[12px] text-[12px] font-monserrat rounded border border-[rgba(197,198,203,0.53)] text-[#fff] bg-[rgba(44,44,44,0.42)]  sm:h-[52px]  xl:w-[445px] xl:h-[58px]  xl:mb-[30px] sm:text-[16px]"
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

            <div className="flex justify-center w-full mt-6 xl:w-[445px]">
              <button
                className="bg-[rgba(44,44,44,0.42)] w-full border border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-normal text-[12px] font-monserrat sm:text-[16px] sm:py-3  hover:border-[#898155]"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 z-10">
          <div className="bg-black/30 backdrop-blur-sm p-[24px]  xl:w-[530px]">
            <div className="w-full flex items-center justify-start mb-4 md:mb-[28px]">
              <button onClick={prevStep} className="flex items-center text-white gap-2">
                <ArrowLeft className="w-[24px] h-[24px]" />
                <span className="text-[12px] font-monserrat text-[#969696]">Go Back</span>
              </button>
            </div>

            <h2 className="text-white text-[14px] font-normal mb-[24px] font-thankslabs  sm:text-[18px] sm:mb-[28px]">
              Event Details
            </h2>

            <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-[24px]">
              {/* Step 1 - Personal (always completed) */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] border border-[#898155] text-black">
                  <FaCheck className="w-3 h-3" />
                </div>
                <span className="mt-2 text-xs text-center text-[#898155]">Personal</span>
              </div>

              {/* Step 2 - Event */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center z-10
        ${
          formData.eventType &&
          formData.eventDate &&
          formData.startTime &&
          formData.endTime &&
          formData.members
            ? 'bg-[#898155] border border-[#898155] text-black'
            : 'bg-black border-2 border-[#898155]'
        }`}
                >
                  {formData.eventType &&
                  formData.eventDate &&
                  formData.startTime &&
                  formData.endTime &&
                  formData.members ? (
                    <FaCheck className="w-3 h-3" />
                  ) : (
                    <div className="w-2 h-2 bg-[#898155] rounded-full"></div>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs text-center ${
                    formData.eventType &&
                    formData.eventDate &&
                    formData.startTime &&
                    formData.endTime &&
                    formData.members
                      ? 'text-[#898155]'
                      : 'text-[#898155]'
                  }`}
                >
                  Event
                </span>
              </div>

              {/* Step 3 - Additional Info */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Additional Info</span>
              </div>

              {/* Step 4 - Success */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Success</span>
              </div>
            </div>

            <div className="relative w-[334px] mb-[24px]">
              <label className="flex mb-1 text-white text-[12px] font-monserrat sm:text-[18px]">
                Event Types
              </label>

              <Listbox
                value={formData.eventType}
                onChange={value => setFormData({ ...formData, eventType: value })}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-pointer rounded border border-[rgba(197,198,203,0.53)] bg-[rgba(44,44,44,0.42)] py-2 pl-4 pr-10 text-left text-white text-[12px] font-monserrat focus:outline-none sm:text-[16px] sm:p-3  xl:w-[450px]">
                    <span className="block truncate">
                      {formData.eventType || 'Select Event Type'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ChevronDown className="w-4 h-4 text-white" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-black text-white text-[12px] font-monserrat border border-[rgba(197,198,203,0.53)] py-1 text-sm shadow-lg">
                    {eventTypes.map(event => (
                      <Listbox.Option
                        key={event.id}
                        value={event.name}
                        className={({ active }) =>
                          `cursor-pointer select-none relative py-[12px] pl-10 pr-4 ${
                            active ? 'bg-[#898155]' : ''
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-bold' : ''}`}>
                              {event.name}
                            </span>
                            {selected && (
                              <span className="absolute left-3 top-2 text-yellow-400">✓</span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {errors.eventType && (
                <p className="text-red-500 text-[12px] font-monserrat mt-1">{errors.eventType}</p>
              )}
            </div>

            <div className="mb-[24px]">
              <label className="flex mb-1 text-white text-[12px] font-monserrat sm:text-[18px]">
                Event Date
              </label>

              <div className="relative w-[334px]">
                <DatePicker
                  selected={formData.eventDate}
                  onChange={date => setFormData({ ...formData, eventDate: date as Date })}
                  className="w-[334px] p-2 pr-10 border border-[rgba(197,198,203,0.53)] text-[12px] font-monserrat text-white bg-[rgba(44,44,44,0.42)] sm:py-3  xl:w-[450px] xl:h-[54px] rounded-[4px] xl:text-[16px]"
                />
                <Image
                  src={calender}
                  alt="calendar"
                  className="absolute right-[-92px] top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
              </div>

              {errors.eventDate && (
                <p className="text-red-500 text-[12px] font-monserrat">{errors.eventDate}</p>
              )}
            </div>

            <div className="flex gap-[12px] mb-[24px]">
              <div>
                <label className="block mb-1 text-white text-[12px] sm:text-[18px]">
                  Start Time
                </label>
                <TimePicker
                  onChange={time => setFormData({ ...formData, startTime: time as string })}
                  value={formData.startTime}
                  disableClock
                  clearIcon={null}
                  className="w-[161px] h-[42px] text-white bg-[rgba(44,44,44,0.42)] rounded-[4px] text-[12px] font-monserrat border border-[rgba(197,198,203,0.53)] xl:w-[220px] xl:h-[54px] xl:text-[16px]"
                />
              </div>
              {errors.startTime && (
                <p className="text-red-500 text-[12px] font-monserrat">{errors.startTime}</p>
              )}

              <div>
                <label className="block mb-1 text-white text-[12px] font-monserrat sm:text-[18px]">
                  End Time
                </label>
                <TimePicker
                  onChange={time => setFormData({ ...formData, endTime: time as string })}
                  value={formData.endTime}
                  disableClock
                  clearIcon={null}
                  className="w-[161px] h-[42px] text-white text-[12px] font-monserrat bg-[rgba(44,44,44,0.42)] border border-[rgba(197,198,203,0.53)] rounded-[4px] xl:w-[220px] xl:h-[54px] xl:text-[16px]"
                />
              </div>
              {errors.endTime && <p className="text-red-500 text-sm">{errors.endTime}</p>}
            </div>

            <div className="relative w-[334px] mb-[24px] xl:w-[450px]">
              <label
                htmlFor="members"
                className="block text-white text-[12px] font-monserrat mb-1 sm:text-[18px]"
              >
                Number of Guests
              </label>
              <div className="relative flex items-center">
                <input
                  id="members"
                  type="number"
                  min={2}
                  max={12}
                  value={formData.members}
                  onChange={e => {
                    // Accept raw input as a string
                    setFormData({ ...formData, members: e.target.value });
                  }}
                  onBlur={e => {
                    // Validate on blur
                    let value = parseInt(e.target.value, 10);
                    if (isNaN(value)) value = 2;
                    value = Math.max(2, Math.min(12, value));
                    setFormData({ ...formData, members: value.toString() });
                  }}
                  className="w-full p-2 pr-10 border border-[rgba(197,198,203,0.53)] text-white bg-[rgba(44,44,44,0.42)] rounded font-monserrat text-[12px] sm:py-3 xl:h-[54px] xl:text-[16px]"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-[12px] font-monserrat pointer-events-none xl:text-[16px]">
                  guests
                </span>
              </div>
            </div>

            <div className="flex justify-center w-full mb-[24px] xl:w-[450px]">
              <button
                className="bg-[rgba(44,44,44,0.42)] w-full border font-monserrat border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-normal sm:text-[18px] xl:h-[54px]  hover:border-[#898155]"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 z-10">
          <div className="flex flex-col w-[334px] text-[#fff]  bg-black/30 backdrop-blur-sm p-[24px]  sm:w-[370px] xl:w-[530px]">
            <div className="w-full flex items-center justify-start mb-4 md:mb-[28px]">
              <button onClick={prevStep} className="flex items-center text-white gap-2">
                <ArrowLeft className="w-[24px] h-[24px]" />
                <span className="text-[12px] text-[#969696] font-monserrat">Go Back</span>
              </button>
            </div>
            <h2 className="text-[14px] font-thankslabs text-[#fff] mb-[24px] tracking-wide  sm:text-[18px] sm:mb-[28px]">
              Additional Information
            </h2>

            <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-[24px]">
              {/* Step 1 - Personal */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] border border-[#898155] text-black">
                  <FaCheck className="w-3 h-3" />
                </div>
                <span className="mt-2 text-xs text-center text-[#898155]">Personal</span>
              </div>

              {/* Step 2 - Event */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] border border-[#898155] text-black">
                  <FaCheck className="w-3 h-3" />
                </div>
                <span className="mt-2 text-xs text-center text-[#898155]">Event</span>
              </div>

              {/* Step 3 - Additional Info (Active with gold border and dot) */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {step > 3 ? (
                  // Completed: Gold background with checkmark
                  <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] text-black">
                    <FaCheck className="w-3 h-3" />
                  </div>
                ) : (
                  // Active: Black background with gold border and gold dot
                  <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#898155]">
                    <div className="w-2 h-2 bg-[#898155] rounded-full"></div>
                  </div>
                )}

                <span className="mt-2 text-[10.2px] text-center text-[#898155]  xl:text-[11px]">
                  Additional Info
                </span>
              </div>

              {/* Step 4 - Success (Inactive) */}
              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-black border-2 border-[#5C5C5C]"></div>
                <span className="mt-2 text-xs text-center text-white/70">Success</span>
              </div>
            </div>

            <h2 className="text-[14px] font-monserrat  mb-2 tracking-wide sm:text-[16px]">
              Additional Information
            </h2>
            <textarea
              className="w-full h-[155px] p-2 border font-monserrat  border-[rgba(197,198,203,0.53)] text-[#fff] mb-[24px] sm:h-[180px]"
              name="notes"
              placeholder="Type your message"
              value={formData.notes}
              onChange={handleChange}
            />
            <div className="flex justify-center w-full">
              <button
                className="bg-[rgba(44,44,44,0.42)] font-monserrat w-full border border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-normal sm:py-3  hover:border-[#898155]"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="absolute inset-0 flex flex-col gap-[24px] items-center justify-center px-4 py-8 z-10">
          <div className=" bg-black/30 backdrop-blur-sm p-[24px] sm:w-[384px] xl:w-[530px] xl:p-[30px]">
            <h1 className="text-[14px] font-thankslabs  mb-[24px] tracking-wide text-[#fff] sm:text-[18px] sm:mb-[28px]">
              Event Booked!
            </h1>

            <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-[24px]">
              {/* <!-- Step 1 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                {/* <!-- Left Line (omit for first step) --> */}

                {/* <!-- Right Line --> */}
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {/* <!-- Step Circle --> */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] text-white">
                  <span className="text-sm font-bold">✓</span>
                </div>

                {/* <!-- Step Label --> */}
                <span className="mt-2 text-xs text-center text-[#898155]">Personal</span>
              </div>

              {/* <!-- Step 2 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                {/* <!-- Left Line --> */}
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                {/* <!-- Right Line --> */}
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {/* <!-- Step Circle --> */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] text-white">
                  <span className="text-sm font-bold">✓</span>
                </div>

                {/* <!-- Step Label --> */}
                <span className="mt-2 text-xs text-center text-[#898155]">Event</span>
              </div>

              {/* <!-- Step 3 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                {/* <!-- Left Line --> */}
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>
                {/* <!-- Right Line --> */}
                <div className="absolute right-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {/* <!-- Step Circle --> */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] text-white">
                  <span className="text-sm font-bold">✓</span>
                </div>

                {/* <!-- Step Label --> */}
                <span className="mt-2 text-xs text-center text-[#898155]">Additional Info</span>
              </div>

              {/* <!-- Step 4 --> */}
              <div className="flex-1 flex flex-col items-center relative">
                {/* <!-- Left Line --> */}
                <div className="absolute left-0 top-3 w-1/2 h-[2px] bg-[#5C5C5C] z-0"></div>

                {/* <!-- Step Circle --> */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 bg-[#898155] text-white">
                  <span className="text-sm font-bold">✓</span>
                </div>

                {/* <!-- Step Label --> */}
                <span className="mt-2 text-xs text-center text-[#898155]">Success</span>
              </div>
            </div>

            <h2 className="text-[14px] font-monserrat text-[#fff] font-normal mb-[32px] sm:text-[16px]">
              Thank you! You have successfully booked an event at Drip London.
            </h2>
            <div className="flex flex-col gap-2 w-[334px] xl:w-[450px]">
              <button
                className="bg-[rgba(44,44,44,0.42)] font-monserrat w-full border border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-normal sm:py-3  hover:border-[#898155]"
                onClick={() => setStep(1)}
              >
                Book Again
              </button>
              <button
                className="bg-[rgba(44,44,44,0.42)] font-monserrat w-full border border-[rgba(197,198,203,0.53)] text-[#fff] px-6 py-2 rounded font-normal sm:py-3  hover:border-[#898155]"
                onClick={() => router.push('/')}
              >
                Return to Home Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Block22;
