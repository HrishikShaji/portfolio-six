import { useContext, useEffect, useRef, useState } from "react";
import { data } from "../lib/data";
import SampleCityTwo from "./SampleCityTwo";
import { ScrollContext } from "./ScrollContext";
import gsap from "gsap";
import Outer from "./Outer";
import { CloudOne } from "./CloudOne";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Sample = () => {
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
    { top: "0px", left: "0px" },
    { top: "0px", left: "360px" },
    { top: "0px", left: "720px" },
    { top: "0px", left: "1080px" },
    { top: "0px", left: "1440px" },
    { top: "0px", left: "1800px" },
    { top: "0px", left: "2160px" },
    { top: "0px", left: "2520px" },
    { top: "100px", left: "180px" },
    { top: "100px", left: "540px" },
    { top: "100px", left: "900px" },
    { top: "100px", left: "1260px" },
    { top: "100px", left: "1620px" },
    { top: "100px", left: "1980px" },
    { top: "100px", left: "2340px" },
    { top: "100px", left: "2700px" },
  ];

  const [arr, setArr] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const arr = math();
    setArr(arr);
  }, []);
  const math = () => {
    const first = [
      "10px",
      "-10px",
      "40px",
      "50px",
      "-30px",
      "0px",
      "-40px",
      "20px",
    ];
    const second = [
      "210px",
      "-70px",
      "240px",
      "250px",
      "60px",
      "200px",
      "50px",
      "220px",
    ];
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < 8; i++) {
      const obj = {
        top: first[i],
        left: `${i * 360}px`,
      };
      arr1.push(obj);
    }
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        arr2.push({ top: "100px", left: "180px" });
      } else {
        const obj = {
          top: second[i],
          left: `${i * 360 + 180}px`,
        };
        arr2.push(obj);
      }
    }
    return arr1.concat(arr2);
  };

  console.log(math());

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
            style={{ left: arr[i]?.left, top: arr[i]?.top }}
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
    </div>
  );
};
