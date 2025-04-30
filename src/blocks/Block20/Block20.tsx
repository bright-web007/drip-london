import React from 'react'
import Image, { StaticImageData } from 'next/image'


const Block20 = ({ date, subtitle, description, image }: { date: string; subtitle: string; description: string; image: StaticImageData }) => {
  return (
             <div className="xl:h-[570.3425px] xl:w-[512.3973px]  flex flex-col gap-[7px] sm:gap-[10px]  xl:gap-[15px]" >
                    
                                <div className="xl:w-[512.3973px] xl:h-[395.096px]">
                                   <Image src={image} alt="cards"  className="w-full"/>
                                </div> 

                                <div className="flex flex-col gap-[10px]  sm:gap-[12px]   xl:gap-[16px]">
                                  <div >
                                  <p className="xl:h-[15.1233px] text-[9px] font-monserrat text-[#898155] not-italic font-[400px] leading-[15.123px]  sm:text-[12px]    xl:text-[12.603px]">{date}</p>
                                  </div>
                                  <div className="flex flex-col gap-[3px]  sm:gap-[5px]   xl:gap-[8px]">

                                    <div className="xl:h-[61px]">
                                       <h2 className="text-[14px] font-thankslabs text-[#898155] not-italic font-[600px] leading-[30.247px] self-stretch  sm:text-[16px]   xl:text-[18px]">{subtitle}</h2>
                                    </div>
                                    <div className="xl:h-[60px] ">
                                       <p className="text-[10px] font-monserrat text-[#6D6D6D] not-italic font-[400px] leading-[20px]  sm:text-[12px]  md:text-[14px]">{description}</p>
                                    </div>

                                  </div>
                                </div>
                                
                     
             </div>
  )
}

export default Block20