"use client";

import { useContext } from "react";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { ScrollContext } from "./ScrollContext";
import { About } from "./About";

export const Wrapper = () => {
	const refs = useContext(ScrollContext);
	if (!refs) return null;

	const { targetRef, containerRef, sunRef } = refs;
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
