import How from "../../ui/organisms/aboutpage/How";
import ButWhy from "../../ui/organisms/aboutpage/but-why";
import Foundation from "../../ui/organisms/aboutpage/foundation";
import AboutHero from "../../ui/organisms/aboutpage/hero";
import Join from "../../ui/organisms/aboutpage/join";
import Partners from "../../ui/organisms/aboutpage/partners";
import SafeZoners from "../../ui/organisms/aboutpage/safezoners";
import MeetTeam from "../../ui/organisms/aboutpage/team";

const AboutPageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<AboutHero />
      	<Foundation />
			<Partners />
			<How />
			<ButWhy />
      	<SafeZoners />
			<MeetTeam />
			<Join/>
		</div>
	);
};

export default AboutPageTemplate;
