'use client';
import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

gsap.registerPlugin(ScrollTrigger);

export default function NavbarClient({ menu }: { menu: Menu[] }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [siteName, setSiteName] = useState('');
  //   const { SITE_NAME } = process.env;

  useEffect(() => {
    const navbar = navRef.current;
    setSiteName(process.env.SITE_NAME || 'Aurgor Falco');
    if (!navbar) return;

    gsap.fromTo(
      navbar,
      { y: '-100%', opacity: 0 }, // Start hidden
      {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: document.body,
          start: 'top -10', // Starts when scrolling down
          end: '+=10', // Ensures it's triggered early
          toggleActions: 'play none none reverse' // Show when scrolling down, hide when scrolling up
        }
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-[9999] flex w-full items-center justify-between bg-transparent backdrop-blur-2xl p-4 transition-transform lg:px-6"
    >
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {siteName}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
