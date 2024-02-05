import { data } from "../lib/data";

export const Skills = () => {
	return (
		<div className="h-full w-[100vw] bg-orange-500 flex flex-col gap-10 panel p-10">
			<h1 className="text-9xl">MY SKILLS</h1>
			<div className="w-full grid grid-cols-4 gap-4">
				{data.skills.data.map((item, i) => (
					<div key={i}><h1 className="text-6xl">{item}</h1></div>
				))}
			</div>
		</div>
	);
};
