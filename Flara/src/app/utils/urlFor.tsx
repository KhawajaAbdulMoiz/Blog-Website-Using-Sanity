import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

const builder = imageUrlBuilder(client);

export function urlFor(source: { asset: { _ref: string } } | undefined): ImageUrlBuilder | null {
  if (!source || !source.asset?._ref) {
    return null;
  }
  return builder.image(source);
}
