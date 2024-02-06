"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Sun } from "./Sun";
import { userAgentFromString } from "next/server";
import { SampleCity } from "./SampleCity";

export const Wrapper = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const sunRef = useRef<HTMLDivElement>(null);

	const heroRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const pathOne = document.getElementById("path-one");
			if (
				heroRef.current &&
				containerRef.current &&
				targetRef.current &&
				sunRef.current
			) {
				console.log(pathOne);
				const amountToScroll =
					targetRef.current.offsetWidth - window.innerWidth;

				const animation = gsap.to(targetRef.current, {
					x: -amountToScroll,
					duration: 2,
					scrollTrigger: {
						trigger: containerRef.current,
						pin: containerRef.current,
						start: "left top",
						end: "+=" + amountToScroll,
						scrub: 1,
					},
				});

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sunRef.current,
						start: "left top",
						end: "+=" + amountToScroll,
						scrub: 1,
					},
				});

				tl.to(sunRef.current, {
					motionPath: {
						path: [
							{ x: window.innerWidth / 2, y: -100 },
							{ x: window.innerWidth, y: 0 },
						],
					},
				});

				gsap.to(pathOne, {
					backgroundColor: "blue",
					scrollTrigger: {
						containerAnimation: animation,
						trigger: pathOne,
						start: "left 50%",
						end: "left 30%",
						scrub: true,
						markers: true,
					},
				});
			}
		},
		{ scope: heroRef },
	);

	return (
		<div
			ref={containerRef}
			className="flex relative flex-nowrap h-[100vh] w-full"
		>
			<div
				ref={sunRef}
				className="w-40 fixed h-40 -translate-x-[50%] rounded-full bg-black top-40 left-0 z-20"
			></div>

			<div className="flex relative gap-0 m-0" ref={targetRef}>
				<div
					ref={heroRef}
					className="absolute z-20 top-40 left-40 w-[1000px] h-[600px]"
				>
					<SampleCity />
				</div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};
