"use client";

import { Ref, forwardRef, useEffect, useState } from "react";
import SampleCity from "./SampleCity";
import { Circular } from "./Circular";

export const Hero = () => {
	return (
		<div className="h-full relative w-[100vw] overflow-hidden flex justify-center items-center  panel  ">
			<div className="h-[200px] w-[200px] absolute z-40 bg-green-500 text-black">
				<Circular />
			</div>
			<div className="absolute bottom-0 left-0 w-[100vw]"></div>
		</div>
	);
};
