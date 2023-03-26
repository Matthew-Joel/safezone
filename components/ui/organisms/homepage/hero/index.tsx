import React from "react";
import HeroImageComponent from "./HeroImageComponent";
import { WebSecurityIcon1 } from "../../../common/icons";
import Typewriter from "../../../../../utils/typewriter";

const HompageHero = ({ isHeight }: { isHeight: boolean }) => {
	return (
		<div className="bg-safezone_homepage_hero md:h-[110vh] h-[115vh] w-screen -mt-24 md:pt-36 pt-44 relative">
			<div className="lg:mx-24 flex justify-center h-auto">
				<div className="flex flex-col items-center md:-mt-10 mt-3">
					<div className="animate-pulse">
						<WebSecurityIcon1 />
					</div>
					<div className="text-center">
						<p className="lg:text-3xl text-2xl text-white font-medium">
							Safest Mode
							<span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
								<Typewriter
									texts={["of Payment", "of Transactions", "of Buying", "of Selling"]}
								/>
							</span>
						</p>
						<p className="text-sm md:text-md text-white md:mx-auto mx-8">
							Its better to be safe than sorry... always request to pay with safezone
						</p>
					</div>
				</div>
				<div className="container absolute md:-bottom-5 bottom-[.08em] h-auto">
					<HeroImageComponent isHeight={isHeight} />
				</div>
			</div>
		</div>
	);
};

export default HompageHero;
