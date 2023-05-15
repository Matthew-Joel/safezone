import Image from "next/image";
import React from "react";

const SafeZoners = () => {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex-col lg:mx-24 md:mx-32 md:w-full lg:mt-10 my-12">
				<div className="justify-center items-center md:flex md:w-full sm:w-full grid gap-[3em]">
					<div className="flex flex-col md:h-full md:w-[40vw] lg:flex">
						<img
							src="/images/safezoners.png"
							alt="Safezoners"
							className="object-contain gradient-bg pb-2 pl-2"
						/>
					</div>
					<div className="grid md:gap-3 gap-4">
						<div className="xl:py-32 lg:py-16 md:py-12 xl:px-2 px-5">
							<p className="text-black text-center md:text-left font-medium text-sm">
								We are the <br />
								<span className="font-semibold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#80FF00]/40 to-[#00CCFF]">
									Safezoners
								</span>
							</p>
							<p className="text-sm text-center md:text-left font-bold text-black">
								Safeguarding your hard-earned <br />
								money
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafeZoners;
