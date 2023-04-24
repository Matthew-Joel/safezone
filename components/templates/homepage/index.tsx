import NavLinks from "../../ui/layout/nav/NavLinks";
import HomepageHero from "../../ui/organisms/homepage/hero";
import StaySafe from "../../ui/organisms/homepage/stay-safe";
import ProtectYou from "../../ui/organisms/homepage/protect-you";
import BeSafe from "../../ui/organisms/homepage/be-safe";
import ECommerce from "../../ui/organisms/homepage/e-commerce";
import How from "../../ui/organisms/homepage/How";
import ButWhy from "../../ui/organisms/homepage/but-why";
import Join from "../../ui/organisms/homepage/join";

const HomepageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<HomepageHero />
			<div className="sticky h-auto top-1 xl:-mt-36 lg:-mt-20 -mt-32 z-10 w-full">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<StaySafe />
			<ProtectYou />
			<BeSafe />
			<How/>
			<ButWhy/>
			<ECommerce />
			<Join />
		</div>
	);
};

export default HomepageTemplate;
