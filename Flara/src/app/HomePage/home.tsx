import React from 'react'
import styles from './Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity';



const fetchBlogs = async () => {
  const query = `*[_type == 'Blog']{
    title,body,slug
    
  }[1]`;

  const blogs = await client.fetch(query);
  return blogs;
};
export default async function  HomePage() {
  const blogs = await fetchBlogs();
  return (
   
    <div className={styles.main}>
        <div>
        <h3 className={styles.main_subtext}>Featured Post</h3>
        <h1 className={styles.main_heading}>{blogs.title}</h1>

        <Link href={`${blogs.slug.current}`}><button className={styles.navbar__button}>
        Read More
      </button></Link>
       </div>
       <div>
      <Image 
        src="/robotAi.png"  
        alt="Logo"
        width={436.56}   
        height={350}  
        className={styles.main_image}
      />
       </div>
       </div>
    
  )
}

