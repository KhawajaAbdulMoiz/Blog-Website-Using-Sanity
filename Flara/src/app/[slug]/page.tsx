
import React from 'react';
import { client } from '@/lib/sanity';
import BlogPostClient from '../BlogPostClient';
import { PortableTextBlock } from '@portabletext/react';

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


const BlogPostServer = async ({ params }: BlogPostProps) => {
  const { slug } = await params;  // This ensures that `slug` is extracted after the promise resolves

  const query = `*[_type == 'Blog' && slug.current == $slug][0]{ title, body, image }`;
  const post: Post | null = await client.fetch(query, { slug });

  if (!post) {
    return <div className="container mx-auto p-4">Blog post not found.</div>;
  }

  return (
    <BlogPostClient post={post} />
  );
};

export default BlogPostServer;