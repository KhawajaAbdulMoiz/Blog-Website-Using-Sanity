import React from 'react'

export default function Engage() {
  return (
    <div>
       
      <div className="container bg-customPurple h-[295px] ml-[1.8%] sm:w-full sm:h-full md:w-full md:h-[300px] lg:w-full lg:h-[500px]">
        <h1 className='text-center text-bold text-[24px] font-200 font-raleway text-black text-white pt-[10%] sm:text-[30px] md:text-[37.34px] lg:text-[52px]'>
        Get our stories delivered From<br/> us to your inbox weekly.
        </h1>
        <div className='flex gap-2 justify-center font-200 font-raleway'>
        <input className='w-[14%] p-2 rounded mt-6 sm: w-[211.82px]' type="email" placeholder='Your Email' required/>
        <button className="font-raleway font-thin mt-6 border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Get Started
        </button>
        
        </div>
      </div>
    </div>
  )
}
