import React from "react";
import HeroImageComponent from "./HeroImageComponent";

const HompageHero = () => {
	return (
		<div className="relative">
			<div className="bg- h-[120vh] w-screen -mt-40 md:pt-36 pt-44">
				<div className="lg:mx-24">
					<div className="container p-5">
						<HeroImageComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HompageHero;
