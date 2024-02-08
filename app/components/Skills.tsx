import { useContext, useEffect, useRef } from "react";
import { data } from "../lib/data";
import { ScrollContext } from "./ScrollContext";
import SampleCity from "./SampleCity";
import gsap from "gsap";

export const Skills = () => {
  const refOne = useRef<SVGSVGElement>(null);
  const refTwo = useRef<SVGSVGElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const refs = useContext(ScrollContext);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (
        refOne.current &&
        refTwo.current &&
        mainRef.current &&
        refs &&
        refs.scrollTween.current
      ) {
        const { scrollTween } = refs;
        const paths = Array.from(
          refOne.current.getElementsByClassName("city-one"),
        );
        const pathsTwo = Array.from(
          refTwo.current.getElementsByClassName("city-one"),
        );
        gsap.to(".city-one", {
          stagger: 2,
          ease: "none",
          fill: "blue",
          scrollTrigger: {
            containerAnimation: scrollTween.current,
            trigger: refOne.current,
            start: "left 50%",
            end: "left 20%",
            markers: true,
            scrub: true,
          },
        });
      }
    }, mainRef);

    return () => ctx.kill();
  }, [refs]);

  return (
    <div
      ref={mainRef}
      className=" relative h-full w-[100vw] bg-orange-500 flex flex-col gap-10 panel p-10"
    >
      <h1 className="text-9xl">MY SKILLS</h1>
      <div className="w-full grid grid-cols-4 gap-4">
        {data.skills.data.map((item, i) => (
          <div key={i}>
            <h1 className="text-6xl">{item}</h1>
          </div>
        ))}
      </div>
      <div className="absolute w-full h-full z-20 flex bottom-0 left-0">
        <SampleCity ref={refOne} />
        <SampleCity ref={refTwo} />
      </div>
    </div>
  );
};
