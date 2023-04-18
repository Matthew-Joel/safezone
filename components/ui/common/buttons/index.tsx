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
			<div className="bg-[red] text-white">{title}</div>
		</Link>
	);
};
