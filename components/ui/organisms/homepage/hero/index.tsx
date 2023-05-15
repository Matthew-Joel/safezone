import React from "react";
import HeroImageComponent from "./HeroImageComponent";
import { WebSecurityIcon1 } from "../../../common/icons";

const HompageHero = () => {
	return (
		<div className="bg-safezone_homepage_hero h-[120vh] w-screen -mt-28 md:pt-36 pt-44 relative">
			<div className="lg:mx-24 flex justify-center">
				<div className="flex flex-col items-center pt-10">
					<WebSecurityIcon1 />
					<div className="text-center">
						<p className="lg:text-3xl text-2xl text-white font-medium">
							Safest Mode
							<span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
								of Payment
							</span>
						</p>
						<p className="text-sm md:text-md text-white md:mx-auto mx-8">
							Its better to be safe than sorry... always request to pay with safezone
						</p>
					</div>
				</div>
				<div className="container absolute md:-bottom-5 bottom-[1.53em]">
					<HeroImageComponent />
				</div>
			</div>
		</div>
	);
};

export default HompageHero;
