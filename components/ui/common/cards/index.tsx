import Link from "next/link";
import { BlogPostCardType } from "../../../../interfaces/cards";
import Image from "next/image";

export const LatestBlogPostCard = (props: BlogPostCardType) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-3">
			<div className="w-full h-[220px] bg-zinc-100">
				<img
					src={props.imgSrc ? props.imgSrc : "/images/default_image.png"}
					alt={props.title}
					className="w-full h-full"
				/>
			</div>
			<div className="flex flex-col gap-6 justify-center">
				<h2 className="text-xl font-bold mt-4">{props.title}</h2>
				<p className="text-sm">{props.description}</p>
				<div className="text-xs grid grid-cols-2 items-center gap-4">
					<span className="text-zinc-500">
						Posted on <span className="font-semibold">{props.createdAt}</span>
					</span>
					<span className="flex items-center gap-1 text-zinc-500">
						By: <span className="font-semibold">{props.createdBy}</span>
					</span>
				</div>
				<Link href={props.link ? props.link : "#"}>
					<div
						style={{
							background:
								"linear-gradient(221.99deg, rgba(0, 204, 255, 0.13) 10.93%, rgba(128, 255, 0, 0.13) 281.44%)",
						}}
						className="rounded-xl text-center text-sm border-2 border-l-[#00CCFF] border-t-[#00CCFF] 
                        border-r-[#80FF00] border-b-[#80FF00] hover:border-l-[#80FF00] hover:border-r-[#00CCFF] hover:border-b-[#00CCFF] 
                        hover:border-t-[#80FF00] transition-all hover:scale-[.96] duration-300 py-2 px-3 text-black mt-3 lg:mt-0"
					>
						Continue Reading
					</div>
				</Link>
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
