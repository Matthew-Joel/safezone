import React from "react";
import { LatestBlogPostCard } from "../../../common/cards";

const Latest = () => {
	return (
		<div className="bg-white relative lg:mx-20 mx-8 my-20 lg:mx-14">
			<h1 className="text-xl font-semibold">Latest</h1>
			<div className="grid mt-10 gap-10 w-full items-center">
				<LatestBlogPostCard
					title="5 Tips for Avoiding E-Commerce Scammers"
					description={`Online shopping has become increasingly popular over the years, but
					unfortunately, so have e-commerce scammers. These scammers use various
					tactics to trick shoppers into giving away their personal information or
					money...`}
					createdBy={"Darey Oloye"}
					createdAt={"12/01/2023"}
					link={`/blog/${"#id"}`}
					imgSrc="/images/hacker-with-laptop-golden-credit-card.png"
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
		</div>
	);
};
export default Latest;
