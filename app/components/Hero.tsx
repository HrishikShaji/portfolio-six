"use client";

import { Ref, forwardRef, useEffect, useState } from "react";
import SampleCity from "./SampleCity";

export const Hero = () => {
	return (
		<div className="h-full relative w-[100vw] overflow-hidden flex justify-center items-center  panel  ">
			<div className="absolute bottom-0 left-0 w-[100vw]"></div>
		</div>
	);
};
