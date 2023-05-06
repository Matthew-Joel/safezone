import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navlinksChildren } from "./links";
import { useRouter } from "next/router";

const NavLinks = () => {
	const [activeLink, setActiveLink] = useState<string>("");
	const router = useRouter();
	useEffect(() => {
		setActiveLink(router.asPath);
	}, []);
	return (
		<div className="flex items-center justify-center bg-white shadow-lg">
			<ul className="text-black gradient-border text-xs md:text-sm flex items-center font-medium p-1 md:rounded-lg md:flex-row md:space-x-8">
				{navlinksChildren.map((navlink: any, i: any) => (
					<li key={i}>
						<Link
							href={navlink.link}
							onClick={() => setActiveLink(navlink.link)}
							className={`${
								router.asPath === navlink.link
									? "underline text-[#00B2FF]"
									: activeLink === navlink.link && "underline text-[#00B2FF]"
							} block py-2 md:px-4 px-2 md:rounded hover:text-[#00B2FF] duration-300 decoration-2 underline-offset-2 hover:underline`}
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
