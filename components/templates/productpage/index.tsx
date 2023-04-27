import NavLinks from "../../ui/layout/nav/NavLinks";
import Join from "../../ui/organisms/homepage/join";
import ProductpageHero from "../../ui/organisms/productpage/hero";
import WhyBuild from "../../ui/organisms/productpage/why-build";
import WhoBuildFor from "../../ui/organisms/productpage/who-build-for";

const ProductpageTemplate = () => {
    return(
        <div className="w-[100vw] relative">
            <div className="sticky h-auto top-1 xl:-mt-[5%] lg:-mt-[5%] -mt-[-10%] z-10 w-full">
                <div className="flex justify-center">
                    <NavLinks />
                </div>
            </div>
            <ProductpageHero />
            <WhyBuild />
            <WhoBuildFor />
            <Join />

        </div>
    )
}
export default ProductpageTemplate;