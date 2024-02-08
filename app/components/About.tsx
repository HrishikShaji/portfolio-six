"use client";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";
import { ScrollContext } from "./ScrollContext";
import SampleCityTwo from "./SampleCityTwo";

export const About = () => {
	const refOne = useRef<SVGSVGElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);

	const refs = useContext(ScrollContext);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const setupAnimation = (className: string, fill: string) => {
				if (
					refOne.current &&
					mainRef.current &&
					refs &&
					refs.scrollTween.current &&
					refs.sunRef.current
				) {
					const { scrollTween } = refs;

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
				}
			};

			setupAnimation(".window", "#f97316");
			setupAnimation(".layer-one", "#525252");
			setupAnimation(".layer-three", "#0a0a0a");
			setupAnimation(".layer-two", "#262626");
		}, mainRef);

		return () => ctx.kill();
	}, [refs]);

	return (
		<div
			ref={mainRef}
			className="h-full w-[100vw]  relative p-10 bg-orange-500 panel flex flex-col gap-10"
		>
			<h1 className="text-9xl">ABOUT ME</h1>
			<div className="bg-orange-600"></div>
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
