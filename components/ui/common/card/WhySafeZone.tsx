/* eslint-disable @next/next/no-img-element */

import { WhySafeZoneCardType } from "../../../../interfaces/card.type";

const WhySafeZone = ({ title, desc, imgSrc }: WhySafeZoneCardType) => {
	return (
		<div
			className="bg-white p-4 flex gap-4 justify-center items-center w-96 md:w-80 md:h-72"
			style={{ flexDirection: "column" }}
		>
			<div className="bg-[#2626BC] p-2 rounded-full">
				<img src={imgSrc} alt="" />
			</div>
			<h1 className="font-bold text-lg">{title}</h1>
			<p className="text-sm md:px-5 text-center">
				{desc}
			</p>
		</div>
	);
};

export default WhySafeZone;
