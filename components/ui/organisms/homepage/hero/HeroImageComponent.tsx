import React from "react";
import {
	GuardIcon,
	HomeHeroMobileIcon,
	LockIcon,
	PendingIcon,
	TimeSandIcon,
	WebSecurityIcon1,
} from "../../../common/icons";

const HeroImageComponent = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col items-center">
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
				<div className="md:mt-6 mt-10 relative">
					<div className="absolute top-5 -left-[-35%] md:top-14 animate__animated animate__tada animate__infinite animate__slow">
						<LockIcon />
					</div>
					<div className="absolute top-4 md:-right-[-25%] -right-[-20%] md:top-9">
						<TimeSandIcon />
					</div>
					<div className="absolute top-28 md:-left-[-25%] -left-[-20%] md:top-[60%]">
						<PendingIcon />
					</div>
					<div className="animate__animated animate__rubberBand animate__infinite animate__slow absolute bottom-8 right-0 md:bottom-18">
						<GuardIcon />
					</div>
					<HomeHeroMobileIcon />
				</div>
			</div>
		</div>
	);
};

export default HeroImageComponent;
