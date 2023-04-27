import React from "react";
import HeroImageComponent from "./HeroImageComponent";

const HompageHero = () => {
	return (
		<div className="">
			<div className="bg-safezone_homepage_hero lg:h-[100vh] h-auto w-screen -mt-32 md:pt-36 pt-44">
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
