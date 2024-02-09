"use client";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";
import { ScrollContext } from "./ScrollContext";
import SampleCityTwo from "./SampleCityTwo";
import Outer from "./Outer";

export const About = () => {
	const refOne = useRef<SVGSVGElement>(null);
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
				const setupAnimation = (className: string, fill: string) => {
					gsap.to(className, {
						ease: "none",
						fill,
						scrollTrigger: {
							containerAnimation: scrollTween.current,
							trigger: className,
							start: "left 99%",
							end: "left 1%",
							scrub: true,
						},
					});
				};
			}
		});

		return () => ctx.kill();
	}, [refs]);

	return (
		<div
			ref={mainRef}
			className="h-full w-[100vw]  relative p-5   panel flex flex-col gap-5"
		>
			<h1 className="text-9xl  text-orange-500">ABOUT ME</h1>
			<p className="text-xl">{data.about.description}</p>
			<div className="absolute w-[100vw]  z-20 flex bottom-0 left-0">
				<Outer ref={refOne} />
			</div>
		</div>
	);
};
