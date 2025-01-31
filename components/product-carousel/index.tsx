'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GridTileImage } from '../grid/tile';
import { TextAnimate } from '../ui/text-animate';

export default function Carousel({ products }: { products: any[] }) {
  const carouselProducts = [...products, ...products, ...products, ...products, ...products]; // Duplicate for infinite scroll
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth);
    }
  }, []);

  return (
    <motion.div className="relative px-4 md:px-6 my-10 flex h-full w-full flex-col gap-y-10 overflow-hidden">
      <div className="overflow-hidden">
        <TextAnimate animation="slideUp" by="word" className="text-4xl font-bold">
          Our Leading Clothes
        </TextAnimate>
      </div>
      <motion.div
        ref={carouselRef}
        className="flex gap-4"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: 'linear'
        }}
      >
        {carouselProducts.map((product, i) => (
          <motion.div
            key={`${product.handle}${i}`}
            className="relative mx-2 h-[60vh] w-[475px] flex-none"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
