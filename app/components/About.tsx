import { data } from "../lib/data";

export const About = () => {
	return (
		<div className="h-full w-[100vw]  relative p-10 bg-orange-500 panel flex flex-col gap-10">
			<h1 className="text-9xl">ABOUT ME</h1>
			<p className="text-2xl">{data.about.description}</p>
			<div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[100px] mix-blend-difference"></div>
			<div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[300px] mix-blend-difference"></div>

			<div className="h-[140vh] absolute w-[120px] bg-orange-500 rotate-[30deg] -top-40 right-[500px] mix-blend-difference"></div>
			<div className="absolute w-full h-full z-20 flex bottom-0 left-0"></div>
		</div>
	);
};
