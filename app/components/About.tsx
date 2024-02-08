"use client";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import SampleCity from "./SampleCity";
import gsap from "gsap";
import { ScrollContext } from "./ScrollContext";
import SampleCityTwo from "./SampleCityTwo";

export const About = () => {
  const refOne = useRef<SVGSVGElement>(null);
  const refTwo = useRef<SVGSVGElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const refs = useContext(ScrollContext);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (
        refOne.current &&
        mainRef.current &&
        refs &&
        refs.scrollTween.current
      ) {
        const { scrollTween } = refs;
        const paths = Array.from(
          refOne.current.getElementsByClassName("city-one"),
        );
        const layerOne = document.querySelectorAll(".layer-one");
        const layerTwo = document.querySelectorAll(".layer-two");
        layerTwo.forEach((layer) => {
          gsap.to(layer, {
            stagger: 2,
            ease: "none",
            fill: "green",
            scrollTrigger: {
              containerAnimation: scrollTween.current,
              trigger: refOne.current,
              start: "left 50%",
              end: "left 20%",
              markers: true,
              scrub: true,
            },
          });
        });
      }
    }, mainRef);

    return () => ctx.kill();
  }, [refs]);

  return (
    <div
      ref={mainRef}
      className="h-full w-[100vw]  relative p-10 bg-orange-500 panel flex flex-col gap-10"
    >
      <h1 className="text-9xl">ABOUT ME</h1>
      <p className="text-2xl">{data.about.description}</p>
      <div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[100px] mix-blend-difference"></div>
      <div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[300px] mix-blend-difference"></div>

      <div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[500px] mix-blend-difference"></div>
      <div className="absolute w-[100vw]  z-20 flex bottom-0 left-0">
        <SampleCityTwo ref={refOne} />
      </div>
    </div>
  );
};
