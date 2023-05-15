import NavLinks from "../../ui/layout/nav/NavLinks";
import HomepageHero from "../../ui/organisms/homepage/hero";
import StaySafe from "../../ui/organisms/homepage/stay-safe";
import ProtectYou from "../../ui/organisms/homepage/protect-you";
import BeSafe from "../../ui/organisms/homepage/be-safe";
import ECommerce from "../../ui/organisms/homepage/e-commerce";
import ButWhy from "../../ui/organisms/homepage/but-why";
import Join from "../../ui/organisms/homepage/join";
import How from "../../ui/organisms/homepage/How";
import { useEffect, useState } from "react";

const HomepageTemplate = () => {
	const [isScreenHeight, setIsScreenHeight] = useState(false);
	const handleScroll = () => {
		const windowHeight = window.innerHeight;
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollPosition =
			window.pageYOffset || document.documentElement.scrollTop;
		const targetScrollHeight = windowHeight * 0.869;
		if (scrollPosition >= targetScrollHeight) {
			setIsScreenHeight(true);
		} else {
			setIsScreenHeight(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		<div className="w-[100vw] relative">
			<HomepageHero />

			<StaySafe />
			<ProtectYou />
			<BeSafe />
			<How />
			<ButWhy />
			<ECommerce />
			<Join />
		</div>
	);
};

export default HomepageTemplate;
