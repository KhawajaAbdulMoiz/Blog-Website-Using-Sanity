"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Nabar.module.css';
import Link from 'next/link';



function Navbar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  

  return (
    <div className={styles.navbar}>
   
      
      <Image 
        src="/Flara-01.svg"  
        alt="Logo"
        width={31.49}   
        height={31.49} 
        className={styles.navbar__image}
      />
     
      <h1 className='absolute pl-[35%] text-[20px] font-bold font-raleway lg:pl-[3%] lg:mt[1.1%]'>FLARA</h1>
      
      <ul className={`${styles.navbar__ul} ${styles.desktopOnly}`}>
        <Link href="/">
          <li className={styles.navbar__li}>Home</li>
        </Link>
        <Link href="/Blogs">
          <li className={styles.navbar__li}>Blog</li>
        </Link>
        <Link href={"/Blogs"}>
        <li className={styles.navbar__li}>About</li>
        </Link>
      </ul>
      <Link href="/Contact">
        <button className={`${styles.navbar__button} ${styles.desktopOnly}`}>
          Contact Us
        </button>
      </Link>

      
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={styles.mobileMenuIcon}>
        ☰
      </button>
      {isMobileMenuOpen && (
        <ul className={`${styles.navbar__ul} ${styles.mobileMenu}`}>
          <Link href="/">
            <li className={styles.navbar__li}>Home</li>
          </Link>
          <Link href="/Blogs">
            <li className={styles.navbar__li}>Blog</li>
          </Link>
          <li className={styles.navbar__li}>About</li>
          <Link href="/Contact">
            <button className={styles.navbar__button}>Contact Us</button>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
