import React from 'react'
import Image from 'next/image'
export default function Contact() {
  return (
    <div>

      <h1 className="text-center ml-[5rem] p-[0.5rem] mt-[5%] pl-[1.5rem] pr-[1.5rem] text-[48px] font-200 font-raleway text-black sm: text-[22px] font-bold pl-[0rem]">Get in Touch</h1>
      <h3 className="text-center mt-[2%] mb-[110px] ml-[5rem] p-[0.5rem] pl-[1.5rem] pr-[1.5rem] text-[16px] font-200 font-raleway text-gray-500 sm: text-[22px] pl-[0rem]">Contact us to publish your content and show ads to our <br />website and get a good reach.</h3>
      <div className="container flex flex-col items-center justify-center text-center">
        <Image
          src="/mail.png"
          alt="Logo"
          width={70}
          height={70}
          className="mb-2 rounded-full ml-[2.5%]"
        />
        <h2 className="text-center mt-[2%] ml-[2.3rem] p-[0.5rem] pl-[1.5rem] pr-[1.5rem] text-[16px] font-200 font-raleway text-customPurple sm: text-[22px] pl-[0rem]">Email</h2>
        <h3 className="text-center mb-[110px] ml-[2.3rem] p-[0.5rem] pl-[1.5rem] pr-[1.5rem] text-[16px] font-200 font-raleway text-gray-500 sm: text-[16px] pl-[0rem]">contactabdulmoiz2005@gmail.com</h3>
      </div>
      <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Your Email" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="text" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Your Phone" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Subject" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition-all duration-300 ease-in-out focus:ring-purple-400" placeholder="Your Message" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out focus:ring-purple-400">
              Send Message
            </button>
          </div>
        </form>
      </div>


    </div>
  )
}
