import Link from "next/link";

export const GradientButton1 = ({
	title,
	link,
}: {
	title: string;
	link?: string;
}) => {
	return (
		<Link href={link ? link : "#"}>
			<div className="gradient-bg rounded-lg duration-300 hover:scale-[1.05]">
				<div className="text-sm lg:text-md md:p-2 p-1 font-semibold text-white lg:w-40 flex items-center justify-center">
					{title}
				</div>
			</div>
		</Link>
	);
};
