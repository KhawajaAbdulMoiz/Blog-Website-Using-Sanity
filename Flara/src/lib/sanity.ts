import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'vasoqv8e',  
  dataset: 'production',         
  useCdn: true,                 
});
