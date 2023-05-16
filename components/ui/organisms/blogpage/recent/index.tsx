import React from "react";
import { BlogThumbnailCard } from "../../../common/cards";

const Recent = () => {
	return (
		<div className="mt-20">
			<div className=" mx-6 lg:mx-28">
				<h1 className="font-semibold text-xl">Recent Articles</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
					<BlogThumbnailCard
						createdAt={"12/03/2023"}
						createdBy={"Darey Oloye"}
						description=""
						link=""
						imgSrc={"/images/product/young-girl.jpg"}
						title={"What is safezone"}
					/>
					<BlogThumbnailCard
						createdAt={"12/03/2023"}
						createdBy={"Darey Oloye"}
						description=""
						link=""
						imgSrc=""
						title={"What is safezone"}
					/>
					<BlogThumbnailCard
						createdAt={"12/03/2023"}
						createdBy={"Darey Oloye"}
						description=""
						link=""
						imgSrc=""
						title={"What is safezone"}
					/>
					<BlogThumbnailCard
						createdAt={"12/03/2023"}
						createdBy={"Darey Oloye"}
						description=""
						link=""
						imgSrc={"/images/product/young-girl.jpg"}
						title={"What is safezone"}
					/>
				</div>
			</div>
		</div>
	);
};
export default Recent;
