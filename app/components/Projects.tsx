import { data } from "../lib/data";

export const Projects = () => {
	return (
		<div className="h-full w-[100vw] bg-orange-500  flex flex-col gap-10 p-10 panel">
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
		</div>
	);
};
