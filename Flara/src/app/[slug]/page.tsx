import React from 'react';
import { client } from '@/lib/sanity';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { urlFor } from '@/app/utils/urlFor';

interface Post {
  title: string;
  body: PortableTextBlock[];
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = await params; 
  const query = `*[_type == 'Blog' && slug.current == $slug][0]{
    title,
    body,
    image
  }`;

  const post: Post | null = await client.fetch(query, { slug });

  if (!post) {
    return <div className="container mx-auto p-4">Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-[24px] font-bold font-raleway text-gray-700 sm:text-[25.38px] sm:ml-[133px] md:text-[50.38px] lg:text[52]">{post.title}</h1>
      {post.image && post.image.asset._ref && (
        <img
          src={urlFor(post.image)?.url() || ''}
          alt={post.title}
          className="ml-[2%] mt-6 rounded sm:w-[387px] h-[544px] md:w-[687px] md:ml-[25%]"
        />
      )}
      <div className="mt-[40px] text-[13.46px] text-gray-700 md:text-[20.48px] sm:ml-[133px] lg:text[22px]">
        <PortableText value={post.body} />
      </div>
    </div>
  );
};

export default BlogPost;
