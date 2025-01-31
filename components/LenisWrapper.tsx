"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default LenisWrapper;
