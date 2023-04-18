import NavLinks from "../../ui/layout/nav/NavLinks";
import HomepageHero from "../../ui/organisms/homepage/hero";

const HomepageTemplate = () => {
	return (
		<>
			<HomepageHero />
			<div className="sticky top-5 z-10 -mt-20">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
		</>
	);
};

export default HomepageTemplate;
