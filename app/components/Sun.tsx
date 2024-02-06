"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Sun = () => {
	const ref = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (ref.current) {
			gsap.to(ref.current, {
				x: 300,
				scrollTrigger: {
					trigger: ref.current,
					start: "left 90%",
					end: "left 10%",
					scrub: 1,
				},
			});
		}
	}, {});

	return (
		<div
			ref={ref}
			className="z-20 rounded-full h-40 w-40 bg-white fixed top-40 left-40"
		></div>
	);
};
