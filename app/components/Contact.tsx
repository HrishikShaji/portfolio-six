import { useContext, useEffect, useRef } from "react";
import SampleCityTwo from "./SampleCityTwo";
import { ScrollContext } from "./ScrollContext";
import gsap from "gsap";

export const Contact = () => {
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
			className="h-full relative p-10 flex flex-col gap-10 bg-orange-500 w-[100vw] panel"
		>
			<h1 className="text-9xl">CONTACT ME</h1>
			<form className="w-full flex flex-col gap-4 items-start">
				<input
					className="border-b-2 w-full border-black p-3 placeholder:text-black focus:outline-none bg-transparent"
					placeholder="Name..."
				/>
				<input
					className="border-b-2 w-full border-black p-3 placeholder:text-black focus:outline-none bg-transparent"
					placeholder="Email..."
				/>
				<textarea
					className="border-b-2 w-full border-black p-3 placeholder:text-black focus:outline-none bg-transparent"
					placeholder="Message..."
				/>
				<button className="focus:outline-none">
					{" "}
					<h1 className="text-6xl">SEND</h1>
				</button>
			</form>
			<div className="absolute w-[100vw]  z-20 flex bottom-0 left-0">
				<SampleCityTwo ref={refOne} />
			</div>
		</div>
	);
};
