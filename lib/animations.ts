// utils/animations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Slide Top Animation
export const slideTop = (targets: gsap.DOMTarget | string | Element[]) => {
  gsap.fromTo(
    targets,
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.3,
      ease: "power3.inOut",
      // scrollTrigger: {
      //   trigger: targets,
      //   start: "top 80%", // Animation starts when the element is 80% in the viewport
      //   toggleActions: "play none none none", // Play on enter, no reset
      // },
    }
  );
};

// Fade In Animation
export const fadeIn = (targets: gsap.DOMTarget | string | Element[]) => {
  gsap.fromTo(
    targets,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5, // Add a slight delay for smoother sequencing
      scrollTrigger: {
        trigger: targets,
        start: "top 85%", // Animation starts when the element is 85% in the viewport
        toggleActions: "play none none none", // Play on enter, no reset
      },
    }
  );
};
