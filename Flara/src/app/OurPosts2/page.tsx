'use client'; 
import styles from '@/app/RecentPost/Recent-Post.module.css';
import '@/app/OurPosts2/OurPosts2.module.css'
import React from 'react'
import Image from 'next/image';
import { client } from '@/lib/sanity';


const fetchBlogs = async () => {
  const query = `*[_type == "Blog"] {
    title,
    body
  }`;

  const blogs = await client.fetch(query);
  console.log(blogs);  
  return blogs;
};
export default async function Blogs2(){
  const blogs = await fetchBlogs();

  const firstBlog = blogs[0];
  return (
    <>
    <div>
    <h1 className={styles.main_heading}>Our Recent Post</h1> 
    </div>
    <div className='flex mt-10 hidden md:block md:flex md:flex-row'>
   
      <Image
                src="/Container.jpg"
                alt="Logo"
                width={712}
                height={456}
                className='ml-[12%] sm:w-[286.24px] sm:h-[300px] md:w-[386.24px] md:h-[300px] md:mt-[15%] lg:w-[712px] lg:h-[381px] lg:mt-[4%]'


            />
     <div className='mt-12 p-8 w-1/2'>
                <div className={styles.contianer2}>
                    <h4 className={styles.recent_post_text}>{firstBlog.title}</h4>
                    <h2 className={styles.recent_post_heading}>{firstBlog.title}</h2>
                    <h3 className={styles.recent_post_text}>{firstBlog.title}
                    </h3>
                    <button className={styles.rp__button}>
                        Read More
                    </button>
                </div>
            </div>
    </div>
    
    </>
  )
}




