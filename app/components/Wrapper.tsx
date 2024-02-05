"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Wrapper = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (containerRef.current && targetRef.current) {
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
					markers: true,
				},
			});
		}
	}, {});
	return (
		<div
			ref={containerRef}
			className="overflow-x-scroll scrollbar-hide h-[100vh] flex gap-10"
		>
			<div className="flex " ref={targetRef}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};
