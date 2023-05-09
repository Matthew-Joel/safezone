import React from "react";
import { LatestBlogPostCard } from "../../../common/cards";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Latest = () => {
	return (
		<div className="bg-white relative lg:mx-20 mx-8 my-20 lg:mx-14">
			<h1 className="text-2xl font-medium">Latest</h1>
			<div className="flex justify-center">
				<AnimationOnScroll animateIn="animate__fadeInUp">
					<div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-6">
						<LatestBlogPostCard
							title="5 Tips for Avoiding E-Commerce Scammers"
							description={`Online shopping has become increasingly popular over the years, but
					unfortunately, so have e-commerce scammers. These scammers use various
					tactics to trick shoppers into giving away their personal information or
					money...`}
							createdBy={"Darey Oloye"}
							createdAt={"12/01/2023"}
							link={`/blog/${"#id"}`}
						/>
						<LatestBlogPostCard
							title="5 Tips for Avoiding E-Commerce Scammers"
							description={`Online shopping has become increasingly popular over the years, but
					unfortunately, so have e-commerce scammers. These scammers use various
					tactics to trick shoppers into giving away their personal information or
					money...`}
							createdBy={"Darey Oloye"}
							createdAt={"12/01/2023"}
							link={`/blog/${"#id"}`}
						/>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	);
};
export default Latest;
