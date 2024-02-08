"use client";
import {
	RefObject,
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { data } from "../lib/data";
import { useGSAP } from "@gsap/react";
import SampleCity from "./SampleCity";
import gsap from "gsap";
import { deflate } from "zlib";
import { ScrollContext } from "./ScrollContext";

export const About = () => {
	const refOne = useRef<SVGSVGElement>(null);
	const refTwo = useRef<SVGSVGElement>(null);
	const [isMounted, setIsMounted] = useState(false);
	const mainRef = useRef<HTMLDivElement>(null);

	const refs = useContext(ScrollContext);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (refOne.current && refTwo.current && mainRef.current && refs) {
			const { containerRef, scrollTween } = refs;
			const paths = Array.from(
				refOne.current.getElementsByClassName("city-one"),
			);
			console.log(refOne.current);
			paths.forEach((path) => {
				gsap.to(path, {
					ease: "none",
					fill: "blue",
					scrollTrigger: {
						containerAnimation: scrollTween.current,
						trigger: refOne.current,
						start: "left 90%",
						end: "left 40%",
						markers: true,
						scrub: true,
					},
				});
			});
		}
	}, [refs]);

	if (!isMounted) return null;

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
			<div className="absolute w-full h-full z-20 flex bottom-0 left-0">
				<SampleCity ref={refOne} />
				<SampleCity ref={refTwo} />
			</div>
		</div>
	);
};
