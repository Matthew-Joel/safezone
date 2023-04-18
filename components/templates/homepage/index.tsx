import NavLinks from "../../ui/layout/nav/NavLinks";
import HomepageHero from "../../ui/organisms/homepage/hero";
import StaySafe from "../../ui/organisms/homepage/stay-safe";

const HomepageTemplate = () => {
	return (
		<>
			<HomepageHero />
			<div className="fixed md:top-[100vh] md:bottom-auto bottom-2 z-10 -mt-20 w-full">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<StaySafe />
		</>
	);
};

export default HomepageTemplate;
