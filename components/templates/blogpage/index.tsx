import NavLinks from "../../ui/layout/nav/NavLinks";
import Join from "../../ui/organisms/homepage/join";
import BlogPageHero from "../../ui/organisms/blogpage/hero";
import Latest from "../../ui/organisms/blogpage/latest";
import Recent from "../../ui/organisms/blogpage/recent";

const BlogpageTemplate = () => {
	return (
		<div className="w-[100vw] relative">
			<BlogPageHero />
			<div className="sticky top-5 z-50">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<Latest />
			<Recent />
			<Join />
		</div>
	);
};
export default BlogpageTemplate;
