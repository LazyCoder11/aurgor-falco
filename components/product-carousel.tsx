// "use client"; // Carousel must be a Client Component

import { getCollectionProducts } from 'lib/shopify';
import Carousel from './product-carousel/index';

export async function ProductCarousel() {
  const products = await getCollectionProducts({ collection: 'pants' });

  if (!products?.length) return null;

  return <Carousel products={products} />;
}
