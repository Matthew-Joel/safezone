import Link from "next/link";
import React from "react";
import { navlinksChildren } from "./links";

const NavLinks = () => {
	return (
		<div className="hidden md:flex items-center justify-center bg-white">
			<ul className="text-black gradient-border text-sm flex items-center flex-col font-medium p-4 md:p-0 rounded-lg md:flex-row md:space-x-8">
				{navlinksChildren.map((navlink: any, i: any) => (
					<li key={i}>
						<Link
							href={navlink.link}
							className="block py-2 px-4 rounded hover:text-[cyan] duration-300 decoration-2 underline-offset-2 hover:underline"
							style={{ whiteSpace: "nowrap" }}
						>
							{navlink.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavLinks;
