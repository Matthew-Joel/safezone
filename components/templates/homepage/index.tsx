import NavLinks from "../../ui/layout/nav/NavLinks";
import HomepageHero from "../../ui/organisms/homepage/hero";
import StaySafe from "../../ui/organisms/homepage/stay-safe";

const HomepageTemplate = () => {
	return (
		<>
			<HomepageHero />
			<div className="sticky h-auto top-1 xl:-mt-36 lg:-mt-20 -mt-32 z-10 w-full">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<StaySafe />
		</>
	);
};

export default HomepageTemplate;
