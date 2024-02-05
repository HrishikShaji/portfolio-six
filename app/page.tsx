"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Wrapper } from "./components/Wrapper";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
	return (
		<main className="">
			<Wrapper />
		</main>
	);
}
