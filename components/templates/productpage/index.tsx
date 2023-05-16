import Join from "../../ui/organisms/homepage/join";
import ProductpageHero from "../../ui/organisms/productpage/hero";
import WhyBuild from "../../ui/organisms/productpage/why-build";
import WhoBuildFor from "../../ui/organisms/productpage/who-build-for";
import NavLinks from "../../ui/layout/nav/NavLinks";

const ProductpageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<ProductpageHero />
			<div className="sticky top-5 z-50">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<WhyBuild />
			<WhoBuildFor />
			<Join />
		</div>
	);
};
export default ProductpageTemplate;
