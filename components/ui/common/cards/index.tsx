import Link from "next/link";
import { BlogPostCardType } from "../../../../interfaces/cards";

export const LatestBlogPostCard = (props: BlogPostCardType) => {
	const { createdAt, createdBy, description, link, title, imgSrc } = props;
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 w-full md:px-14 px-5">
			<div className="md:flex grid gap-6 items-center">
				<div className="md:w-1/3 w-full h-auto">
					<img
						src={imgSrc || "/images/default_image.png"}
						alt={createdBy}
						className="w-full h-full"
					/>
				</div>
				<div className="md:w-2/3">
					<div className="grid gap-3 items-center">
						<h1 className="font-semibold md:text-xl">{title}</h1>
						<p className="text-sm">{description.substring(0, 200)}...</p>
						<div className="md:flex items-center gap-6">
							<Link href={props.link ? props.link : "#"}>
								<div
									style={{
										background:
											"linear-gradient(221.99deg, rgba(0, 204, 255, 0.13) 10.93%, rgba(128, 255, 0, 0.13) 281.44%)",
									}}
									className="w-full text-sm rounded-xl text-center text-sm border-2 border-l-[#00CCFF] border-t-[#00CCFF] 
                        border-r-[#80FF00] border-b-[#80FF00] hover:border-l-[#80FF00] hover:border-r-[#00CCFF] hover:border-b-[#00CCFF] 
                        hover:border-t-[#80FF00] transition-all hover:scale-[.96] duration-300 py-1 px-3 text-black mt-3 lg:mt-0"
								>
									Continue Reading
								</div>
							</Link>
							<p className="text-xs text-zinc-500 md:mt-0 mt-2">
								Posted on: {createdAt}
							</p>
							<p className="text-xs text-zinc-500 md:mt-0 mt-2">By: {createdBy}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const BlogThumbnailCard = (props: BlogPostCardType) => {
	return (
		<div className="bg-white p-3 rounded-lg shadow-lg">
			<div className="flex flex-col gap-5 items-start justify-start">
				<div className="h-[200px] w-full bg-zinc-100">
					<img
						src={props.imgSrc ? props.imgSrc : "/images/default_image.png"}
						alt={props.title}
						className="w-full h-full"
					/>
				</div>
				<h2 className="text-xl font-bold">{props.title}</h2>
				<p className="text-xs text-zinc-500 flex gap-8 items-center">
					<span>Posted on </span>
					<span>by: {props.createdBy}</span>
				</p>
				<Link href={props.link ? props.link : "#post-id"}>
					<div
						style={{
							background:
								"linear-gradient(221.99deg, rgba(0, 204, 255, 0.13) 10.93%, rgba(128, 255, 0, 0.13) 281.44%)",
						}}
						className="px-5 p-1 rounded-xl border border-l-[#00CCFF] border-t-[#00CCFF] 
                        border-r-[#80FF00] border-b-[#80FF00] hover:border-l-[#80FF00]
						 hover:border-r-[#00CCFF] hover:border-b-[#00CCFF] font-medium
                        hover:border-t-[#80FF00] transition-all text-black text-sm"
					>
						Read Now
					</div>
				</Link>
			</div>
		</div>
	);
};
