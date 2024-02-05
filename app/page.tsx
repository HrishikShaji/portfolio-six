"use client";

import gsap from "gsap";
import { Hero } from "./components/Hero";
import { Spacer } from "./components/Spacer";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  return (
    <main className="">
      <Hero />
    </main>
  );
}
