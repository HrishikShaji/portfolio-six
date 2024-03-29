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

  const coordinates = [
    {
      left: "0px",
      top: "0px",
    },
    {
      left: "300px",
      top: "0px",
    },
    {
      left: "200px",
      top: "300px",
    },
    {
      left: "900px",
      top: "50px",
    },
    {
      left: "1200px",
      top: "200px",
    },
    {
      left: "1500px",
      top: "100px",
    },
    {
      left: "1800px",
      top: "400px",
    },
    {
      left: "2100px",
      top: "800px",
    },
    {
      left: "2400px",
      top: "100px",
    },
    {
      left: "2700px",
      top: "100px",
    },
    {
      left: "2300px",
      top: "500px",
    },
    {
      left: "2500px",
      top: "300px",
    },
    {
      left: "100px",
      top: "100px",
    },
    {
      left: "100px",
      top: "100px",
    },
    {
      left: "100px",
      top: "100px",
    },
    {
      left: "100px",
      top: "100px",
    },
  ];

  return (
    <div
      ref={mainRef}
      className="relative h-full w-[200vw] flex flex-col gap-5 panel p-5"
    >
      <h1 className="text-9xl text-orange-500" ref={headerRef}>
        MY SKILLS
      </h1>
      <div className="w-[200vw] h-[50vh] relative ">
        {data.skills.data.map((item, i) => (
          <div
            key={i}
            className="  absolute z-40"
            style={{ left: coordinates[i].left, top: coordinates[i].top }}
          >
            <div
              className="relative flex justify-center

							"
            >
              <div className="w-[250px]  ">
                <CloudOne />
              </div>
              <h2 className="absolute  bottom-9  text-orange-500 text-2xl font-semibold z-40">
                {item}
              </h2>
            </div>
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
