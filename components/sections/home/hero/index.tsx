'use client';

import { slideTop } from '@/lib/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    const headings = document.querySelectorAll('.animate-text');

    slideTop(Array.from(headings)); // Spread NodeList into an array
    // Initial Entry Animation (Fade-in & Scale)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out'
      }
    );
  }, []);

  return (
    <section className="relative flex min-h-[150vh] flex-col items-center justify-center overflow-hidden">
      <div ref={imageRef} className="absolute left-0 top-0 -z-10 h-full w-full">
        <Image src={'/images/hero.avif'} fill alt="Hero BG" className="object-cover" />
      </div>
      <div className="flex flex-wrap items-center gap-x-16">
        <div className="overflow-hidden">
          <h1 className="animate-text text-[10vw] text-white">AURGOR</h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="animate-text text-[10vw] text-white">FALCO</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
