import React from "react";
import {
	GuardIcon,
	HomeHeroMobileIcon,
	LockIcon,
	PendingIcon,
	HourGlassIcon,
} from "../../../common/icons";
import NavLinks from "../../../layout/nav/NavLinks";

const HeroImageComponent = ({ isHeight }: { isHeight: boolean }) => {
	return (
		<div className="flex items-center justify-center h-auto">
			<div className="flex flex-col items-center">
				<div className="relative">
					<div className="absolute top-5 left-[36%] md:top-14 animate__animated animate__tada animate__infinite animate__slow">
						<LockIcon />
					</div>
					<div className="absolute top-4 md:right-[32%] right-[25%] md:top-9">
						<HourGlassIcon />
					</div>
					<div className="absolute top-28 md:-left-[-30%] -left-[-20%] md:top-[60%]">
						<PendingIcon />
					</div>
					<div className="animate__animated animate__rubberBand animate__infinite animate__slow absolute bottom-8 lg:right-[30%] right-20 md:bottom-18">
						<GuardIcon />
					</div>
					<div className="flex justify-center items-center">
						<HomeHeroMobileIcon />
					</div>
				</div>
				<div className={`top-6 z-50 ${isHeight ? "fixed" : ""}`}>
					<div className="flex justify-center">
						<NavLinks />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroImageComponent;
