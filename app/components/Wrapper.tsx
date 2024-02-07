"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import SampleCity from "./SampleCity";
import { animate } from "framer-motion/dom";

export const Wrapper = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const sunRef = useRef<HTMLDivElement>(null);
	const oneRef = useRef<SVGSVGElement>(null);
	const twoRef = useRef<SVGSVGElement>(null);
	const threeRef = useRef<SVGSVGElement>(null);
	const fourRef = useRef<SVGSVGElement>(null);
	const fiveRef = useRef<SVGSVGElement>(null);
	const sixRef = useRef<SVGSVGElement>(null);
	const sevenRef = useRef<SVGSVGElement>(null);
	const nineRef = useRef<SVGSVGElement>(null);
	const eightRef = useRef<SVGSVGElement>(null);
	const tenRef = useRef<SVGSVGElement>(null);

	const cityContainer = useRef<HTMLDivElement>(null);
	const cityRefs = useRef<HTMLDivElement[]>([]);
	cityRefs.current = [];

	useGSAP(
		() => {
			if (containerRef.current && targetRef.current && sunRef.current) {
				const amountToScroll =
					targetRef.current.offsetWidth - window.innerWidth;

				const animation = gsap.to([targetRef.current, cityContainer.current], {
					x: -amountToScroll,
					duration: 2,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						pin: containerRef.current,
						start: "left top",
						end: "+=" + amountToScroll,
						scrub: true,
					},
				});

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sunRef.current,
						start: "left top",
						end: "+=" + amountToScroll,
						scrub: true,
					},
				});

				tl.to(sunRef.current, {
					motionPath: {
						path: [
							{ x: window.innerWidth / 2, y: -150 },
							{ x: window.innerWidth, y: 0 },
						],
					},
				});

				if (cityContainer.current) {
					const cityAnimation = (ref: SVGSVGElement) => {
						const paths = Array.from(ref.getElementsByClassName("city-one"));

						paths.forEach((path) => {
							gsap.to(path, {
								fill: "blue",
								scrollTrigger: {
									containerAnimation: animation,
									trigger: ref,
									start: "left 80%",
									end: "left 25%",
									scrub: true,
									markers: true,
								},
							});
						});
					};

					if (
						oneRef.current &&
						twoRef.current &&
						threeRef.current &&
						fourRef.current &&
						fiveRef.current &&
						sixRef.current &&
						sevenRef.current &&
						eightRef.current &&
						nineRef.current &&
						tenRef.current
					) {
						cityAnimation(oneRef.current);
						cityAnimation(twoRef.current);
						cityAnimation(threeRef.current);
						cityAnimation(fourRef.current);
						cityAnimation(fiveRef.current);
						cityAnimation(sixRef.current);
						cityAnimation(sevenRef.current);
						cityAnimation(eightRef.current);
						cityAnimation(nineRef.current);
						cityAnimation(tenRef.current);
					}
				}
			}
		},
		{ scope: containerRef },
	);

	return (
		<div
			ref={containerRef}
			className="flex relative
			flex-nowrap h-[100vh] w-full"
		>
			<div
				ref={sunRef}
				className="w-20 fixed h-20 -translate-x-[50%] rounded-full bg-orange-500 top-40 left-0 mix-blend-difference z-20"
			></div>

			<div
				ref={cityContainer}
				className="absolute flex z-20 top-40 left-0 w-[500vw] h-[600px]"
			>
				<SampleCity ref={oneRef} />
				<SampleCity ref={twoRef} />
				<SampleCity ref={threeRef} />
				<SampleCity ref={fourRef} />
				<SampleCity ref={fiveRef} />
				<SampleCity ref={sixRef} />
				<SampleCity ref={sevenRef} />
				<SampleCity ref={eightRef} />
				<SampleCity ref={nineRef} />
				<SampleCity ref={tenRef} />
			</div>
			<div className="flex relative gap-0 m-0 " ref={targetRef}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};
