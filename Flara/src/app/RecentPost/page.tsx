import React from 'react'
import Image from 'next/image';
import styles from './Recent-Post.module.css';
function OurPosts() {
    return (
        <div className="rounded-[20px] p-[5px_8%] relative mt-10 p-4">
            <Image
                src="/container.jpg"
                alt="Logo"
                width={1232}
                height={576}
                className='ml-[1%] rounded'

            />
            <div className='mt-12 p-4 w-1/2'>
                <div className={styles.contianer}>
                    <h4 className={styles.recent_post_text}>Developement</h4>
                    <h2 className={styles.recent_post_heading}>How to make a Game look more attractive with New <br />VR & AI Technology</h2>
                    <h3 className={styles.recent_post_text}>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and  <br />communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools  <br />and resources that enable others, we’re committed to making AI accessible to everyone.
                    </h3>
                    <button className={styles.rp__button}>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurPosts
