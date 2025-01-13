
import React from 'react';
import { client } from '@/lib/sanity';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { urlFor } from '@/app/utils/urlFor';
import CommentsSection from '../Comment-Section/page';
import BlogPostClient from '../BlogPostClient';

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
  params: { slug: string };
}

const fetchPost = async (slug: string) => {
  const query = `*[_type == 'Blog' && slug.current == $slug]{
    title,
    body,
    image
  }`;
  const postData: Post[] = await client.fetch(query, { slug });
  return postData[0]; 
};

const BlogPostServer = async ({ params }: BlogPostProps) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    return <div className="container mx-auto p-4">Blog post not found.</div>;
  }

  return (
    <BlogPostClient post={post} />
  );
};

export default BlogPostServer;
