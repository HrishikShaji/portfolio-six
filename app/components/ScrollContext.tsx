"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useContext, useRef, PropsWithChildren } from "react";

interface Refs {
	containerRef: React.MutableRefObject<HTMLDivElement | null>;
	targetRef: React.MutableRefObject<HTMLDivElement | null>;
	sunRef: React.MutableRefObject<HTMLDivElement | null>;
	cityContainer: React.MutableRefObject<HTMLDivElement | null>;
	scrollTween: React.MutableRefObject<gsap.core.Tween | null>;
}

export const ScrollContext = createContext<Refs | null>(null);

export const ScrollContextProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const sunRef = useRef<HTMLDivElement>(null);
	const cityContainer = useRef<HTMLDivElement>(null);

	const scrollTween = useRef<gsap.core.Tween | null>(null);

	useGSAP(
		() => {
			if (containerRef.current && targetRef.current && sunRef.current) {
				const amountToScroll =
					targetRef.current.offsetWidth - window.innerWidth;

				scrollTween.current = gsap.to(targetRef.current, {
					x: -amountToScroll,
					duration: 2,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						pin: containerRef.current,
						start: "left top",
						end: `+=${amountToScroll}`,
						scrub: true,
					},
				});

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sunRef.current,
						start: "left top",
						end: `+=${amountToScroll}`,
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
			}
		},
		{ dependencies: [scrollTween.current] },
	);

	const refs = {
		containerRef,
		targetRef,
		sunRef,
		cityContainer,
		scrollTween,
	};

	return (
		<ScrollContext.Provider value={refs}>{children}</ScrollContext.Provider>
	);
};
