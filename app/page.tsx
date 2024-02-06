"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Wrapper } from "./components/Wrapper";
import { useEffect, useState } from "react";
import { Sun } from "./components/Sun";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Home() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<main className="">
			<Wrapper />
		</main>
	);
}
