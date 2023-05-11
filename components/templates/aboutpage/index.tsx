import NavLinks from "../../ui/layout/nav/NavLinks";
import Foundation from "../../ui/organisms/aboutpage/foundation";
import AboutHero from "../../ui/organisms/aboutpage/hero";
import Partners from "../../ui/organisms/aboutpage/partners";
import SafeZoners from "../../ui/organisms/aboutpage/safezoners";
import MeetTeam from "../../ui/organisms/aboutpage/team";
import How from "../../ui/organisms/homepage/How";
import ButWhy from "../../ui/organisms/homepage/but-why";
import Join from "../../ui/organisms/homepage/join";

const AboutPageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<AboutHero />
			<div className="sticky h-auto top-1 z-10 w-full">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<Foundation />
			<Partners />
			<How />
			<ButWhy />
			<SafeZoners />
			<MeetTeam />
			<Join />
		</div>
	);
};

export default AboutPageTemplate;
