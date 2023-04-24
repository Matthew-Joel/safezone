import React from "react";
import HeroImageComponent from "./HeroImageComponent";

const HompageHero = () => {
	return (
		<div className="">
			<div className="bg- lg:h-[120vh] md:h-[80vh] w-screen -mt-40 md:pt-36 pt-44">
				<div className="lg:mx-24 flex justify-center">
					<div className="container p-5">
						<HeroImageComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HompageHero;
