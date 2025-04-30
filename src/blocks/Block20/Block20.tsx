import React from 'react'
import Image, { StaticImageData } from 'next/image'


const Block20 = ({ date, subtitle, description, image }: { date: string; subtitle: string; description: string; image: StaticImageData }) => {
  return (
             <div className="border-2 border-[black] ">
                    
                                <div className="">
                                   <Image src={image} alt="cards"  className="w-full"/>
                                </div> 

                                <div className="flex flex-col gap-[10px]">
                                  <div>
                                  <p className="text-[9px] font-monserrat text-[#898155] not-italic font-[400px] leading-[15.123px]">{date}</p>
                                  </div>
                                  <div className="flex flex-col gap-[3px]">
                                  <h2 className="text-[14px] font-thankslabs text-[#898155] not-italic font-[600px] leading-[30.247px] self-stretch">{subtitle}</h2>
                                  <p className="text-[12px] font-monserrat text-[#6D6D6D] not-italic font-[400px] leading-[20px]">{description}</p>
                                  </div>
                                </div>
                                
                     
             </div>
  )
}

export default Block20