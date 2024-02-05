export const Contact = () => {
	return (
		<div className="h-full p-10 flex flex-col gap-10 bg-orange-500 w-[100vw] panel">
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
		</div>
	);
};
