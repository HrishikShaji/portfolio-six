import { useContext, useEffect, useRef } from "react";
import { data } from "../lib/data";
import SampleCityTwo from "./SampleCityTwo";
import { ScrollContext } from "./ScrollContext";
import gsap from "gsap";
import Outer from "./Outer";
import { CloudOne } from "./CloudOne";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills = () => {
  const refOne = useRef<SVGSVGElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const refs = useContext(ScrollContext);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const setupAnimation = () => {
        if (
          refOne.current &&
          mainRef.current &&
          refs &&
          refs.scrollTween.current &&
          headerRef.current
        ) {
          const { scrollTween } = refs;
          // red section
          gsap.to(headerRef.current, {
            duration: 20,
            opacity: 1,
            ease: "elastic",
            scrollTrigger: {
              trigger: mainRef.current,
              containerAnimation: scrollTween.current,
              start: "-20% center",
              toggleActions: "play none none reset",
              scrub: true,
              markers: true,
              id: "1",
            },
          });

          gsap.set(mainRef.current, { zIndex: 999 });

          const fakePin = gsap.to(headerRef.current, {
            x: mainRef.current.getBoundingClientRect().width / 2,
            ease: "none",
          });
          ScrollTrigger.create({
            trigger: mainRef.current,
            containerAnimation: scrollTween.current,
            start: "left left",
            end: "+=" + mainRef.current.getBoundingClientRect().width / 2,
            scrub: true,
            animation: fakePin,
          });
        }
      };
      setupAnimation();
    }, mainRef);

    return () => ctx.kill();
  }, [refs]);

  return (
    <div
      ref={mainRef}
      className="relative h-full w-[200vw] flex flex-col gap-5 panel p-5"
    >
      <h1 className="text-9xl text-orange-500" ref={headerRef}>
        MY SKILLS
      </h1>
      <div className="w-full  gap-4">
        {data.skills.data.map((item, i) => (
          <div
            key={i}
            className="w-full flex items-center justify-center h-full relative"
          >
            <div className="w-[300px]  ">
              <CloudOne />
            </div>
            <h1 className="absolute text-orange-500 text-5xl z-20">{item}</h1>
          </div>
        ))}
      </div>
      <div className="absolute w-[100vw] z-20 flex bottom-0 left-0">
        <Outer ref={refOne} />
      </div>
      <div className="absolute w-[100vw] z-20 flex bottom-0 right-0">
        <Outer ref={refOne} />
      </div>
    </div>
  );
};
