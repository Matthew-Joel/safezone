import Link from "next/link";
import { BlogPostCardType } from "../../../../interfaces/cards";
import Image from "next/image";

export const LatestBlogPostCard = (props: BlogPostCardType) => {
	return (
		<div className="bg-white rounded shadow-lg p-3">
			<div className="w-full h-[220px] bg-zinc-200">
				<Image
					src="/images/product/african-female.jpg"
					alt="image"
					className="w-full h-full"
					height={100}
					width={100}
				/>
			</div>
			<div className="flex flex-col justify-center gap-4">
				<h2 className="text-xl font-bold mt-4">{props.title}</h2>
				<p className="text-sm">{props.description}</p>
				<div className="text-xs grid grid-cols-2 items-center gap-4">
					<span>
						Posted on <span className="font-semibold">{props.createdAt}</span>
					</span>
					<span className="flex items-center gap-1">
						By: <span className="font-semibold">{props.createdBy}</span>
					</span>
					<Link href={props.link ? props.link : "#"}>
						<div className="rounded-xl w-[40vw] lg:w-full border-2 border-[#00CCFF] bg-gradient-to-r from-[#00CCFF]/[0.3] to-[#80FF00]/[0.2] py-1 px-3 text-black mt-2 lg:mt-0">
							Continue Reading
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
