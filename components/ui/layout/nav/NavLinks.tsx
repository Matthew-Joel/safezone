import Link from "next/link";
import React, { useState } from "react";
import { navlinksChildren } from "./links";

const NavLinks = () => {
	const [activeLink, setActiveLink] = useState<string>("");
	return (
		<div className="flex items-center justify-center bg-white">
			<ul className="text-black gradient-border text-sm flex items-center font-medium p-1 rounded-lg md:flex-row md:space-x-8">
				{navlinksChildren.map((navlink: any, i: any) => (
					<li key={i}>
						<Link
							href={navlink.link}
							onClick={() => setActiveLink(navlink.title)}
							className={`${
								activeLink === navlink.title && "underline text-[#00B2FF]"
							} block py-2 px-4 rounded hover:text-[#00B2FF] duration-300 decoration-2 underline-offset-2 hover:underline`}
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
