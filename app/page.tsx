import { ProductCarousel } from '@/components/product-carousel';
import Hero from '@/components/sections/home/hero';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <ThreeItemGrid />
      <ProductCarousel />
      <Footer />
    </main>
  );
}
