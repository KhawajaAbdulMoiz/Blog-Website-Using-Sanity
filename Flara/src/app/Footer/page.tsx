import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div>
            <div>
                <ul className='flex gap-4 text-customPurple text-font text-[11.49px] justify-center mt-[10%] font-raleway sm:text-[11.49px] md:text-[15px] lg:text-[18px] 2xl-text[20px]'>
                    <Link href={"/"}><li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Home</li></Link>
                    <Link href={"/Blogs"}><li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Blog</li></Link>
                    <Link href={"/Blogs"}><li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>About</li></Link>
                    <Link href={"/Contact"}><li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Contact</li></Link>

                </ul>
            </div>
            <div className='flex justify-center gap-6 mt-8 mb-8'>
                <Link href="https://www.linkedin.com/in/khawaja-abdul-moiz/">
                    <Image
                        src="/linkedin.png"
                        alt="Linkedin"
                        width={40}
                        height={40}
                        className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                    /></Link>
                <Link href={'https://khawajaabdulmoiz.vercel.app/'}>
                    <Image
                        src="/portfolio.png"
                        alt="My Personal Potfolio"
                        width={40}
                        height={40}
                        className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                    /></Link>
                <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                />


            </div>
            <footer className="text-center py-4 text-customPurple sm:text-[11.49px] lg:text-[12.49px]">
                <p>&copy; Developed By Khawaja Abdul Moiz</p>
                <p>&copy; Copyright Ideapeel Inc. 2024. All Rights Reserved.</p>
            </footer>
        </div>

    )
}

export default Footer
