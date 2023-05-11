import NavLinks from "../../ui/layout/nav/NavLinks";
import Join from "../../ui/organisms/homepage/join";
import ProductpageHero from "../../ui/organisms/productpage/hero";
import WhyBuild from "../../ui/organisms/productpage/why-build";
import WhoBuildFor from "../../ui/organisms/productpage/who-build-for";

const ProductpageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<ProductpageHero />
			<WhyBuild />
			<WhoBuildFor />
			<Join />
		</div>
	);
};
export default ProductpageTemplate;
