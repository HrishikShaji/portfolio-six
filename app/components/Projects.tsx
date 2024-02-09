import { useContext, useEffect, useRef } from "react";
import { data } from "../lib/data";
import SampleCityTwo from "./SampleCityTwo";
import { ScrollContext } from "./ScrollContext";
import gsap from "gsap";
import Outer from "./Outer";

export const Projects = () => {
	const refOne = useRef<SVGSVGElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const refs = useContext(ScrollContext);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const setupAnimation = (className: string, fill: string) => {
				if (
					refOne.current &&
					mainRef.current &&
					refs &&
					refs.scrollTween.current &&
					refs.sunRef.current
				) {
					const { scrollTween } = refs;

					gsap.to(className, {
						ease: "none",
						fill,
						scrollTrigger: {
							containerAnimation: scrollTween.current,
							trigger: className,
							start: "left 99%",
							end: "left 1%",
							scrub: true,
						},
					});
				}
			};

			setupAnimation(".window", "#f97316");
			setupAnimation(".layer-one", "#525252");
			setupAnimation(".layer-three", "#0a0a0a");
			setupAnimation(".layer-two", "#262626");
		}, mainRef);

		return () => ctx.kill();
	}, [refs]);

	return (
		<div
			ref={mainRef}
			className="h-full relative w-[100vw]   flex flex-col gap-10 p-10 panel"
		>
			<h1 className="text-9xl">MY PROJECTS</h1>
			<div className="flex gap-4 w-full">
				<div className="flex w-full flex-col gap-0">
					{data.projects.data.slice(0, 5).map((item, i) => (
						<div key={i} className="p-5 w-full border-b-2 border-b-black">
							<h1 className="text-6xl">{item.title}</h1>
						</div>
					))}
				</div>

				<div className="flex w-full flex-col gap-0 ">
					{data.projects.data.slice(5, 10).map((item, i) => (
						<div key={i} className="p-5 w-full border-b-2 border-b-black">
							<h1 className="text-6xl">{item.title}</h1>
						</div>
					))}
				</div>
			</div>
			<div className="absolute w-[100vw]  z-20 flex bottom-0 left-0">
				<Outer ref={refOne} />
			</div>
		</div>
	);
};
