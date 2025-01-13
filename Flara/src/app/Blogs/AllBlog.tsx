import React from 'react';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import Card from '@/app/OurPosts3/card';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


interface Iblog {
  image: { asset?: { _ref: string } };  
  title: string;
  slug: { current: string };
}


const builder = imageUrlBuilder(client);


export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


const fetchBlogs = async () => {
  const query = `*[_type == "Blog"] {
    title,
    "slug": slug.current,
    image
  }`;

  const blogs = await client.fetch(query);
  return blogs;
};

export default async function AllBlog() {
  const blogs: Iblog[] = await fetchBlogs();

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
   <Link href={`${blog.slug}`} key={index}>
     <Card
       image={blog.image?.asset ? urlFor(blog.image.asset._ref).url() : ''}
       category="Category"
       title={blog.title}
       description="Blogs are important for developers to showcase their expertise."
     />
 
 </Link>

        ))}
      </div>
    </div>
  );
}
