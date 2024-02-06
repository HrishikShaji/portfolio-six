"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Sun } from "./Sun";

export const Wrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current && targetRef.current && sunRef.current) {
      const amountToScroll = targetRef.current.offsetWidth - window.innerWidth;

      gsap.to(targetRef.current, {
        x: -amountToScroll,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: containerRef.current,
          start: "left top",
          end: "+=" + amountToScroll,
          scrub: 1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sunRef.current,
          start: "left top",
          end: "+=" + amountToScroll,
          scrub: 1,
          markers: true,
        },
      });

      tl.to(sunRef.current, {
        motionPath: {
          path: [
            { x: window.innerWidth / 2, y: -100 },
            { x: window.innerWidth, y: 0 },
          ],
        },
      });
    }
  }, {});
  return (
    <div
      ref={containerRef}
      className="flex relative flex-nowrap h-[100vh] w-full"
    >
      <div
        ref={sunRef}
        className="w-40 fixed h-40 -translate-x-[50%] rounded-full bg-black top-40 left-0 z-20"
      ></div>
      <div className="flex gap-0 m-0" ref={targetRef}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
