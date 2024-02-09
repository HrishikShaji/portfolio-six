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
			<div className="w-[2750px] fixed h-[2750px] mix-blend-difference  -translate-x-[50%] -translate-y-[50%] flex justify-center items-center rounded-full bg-orange-700 top-0 left-0  z-20">
				<div className="w-[1750px] h-[1750px] flex justify-center items-center rounded-full bg-orange-600 top-0 left-0  z-20">
					<div className="w-[1000px] h-[1000px] flex justify-center items-center rounded-full bg-orange-500 top-0 left-0  z-20">
						<div className="w-[500px] h-[500px]  flex justify-center items-center rounded-full bg-orange-400 top-0 left-0  z-20">
							<div className="w-[300px] h-[300px]  flex justify-center items-center rounded-full bg-orange-300 top-0 left-0  z-20">
								<div className="w-[100px] h-[100px]  flex justify-center items-center rounded-full bg-orange-200 top-0 left-0  z-20"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex relative gap-0 m-0 bg-black " ref={targetRef}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};
