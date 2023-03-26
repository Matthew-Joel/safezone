import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GradientButton1 } from "../../common/buttons";
import { useRouter } from "next/router";
import { CloseOutline, MenuOutline } from "react-ionicons";
import { navlinksChildren } from "./links";

const Navbar = () => {
	const [isScreenHeight, setIsScreenHeight] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>("");
	useEffect(() => {
		setActiveLink(router.asPath.split("#")[0]);
	}, [router]);

	const handleScroll = () => {
		const windowHeight = window.innerHeight;
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollPosition =
			window.pageYOffset || document.documentElement.scrollTop;
		const targetScrollHeight = windowHeight * 0.869;
		if (scrollPosition >= targetScrollHeight) {
			setIsScreenHeight(true);
		} else {
			setIsScreenHeight(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		<>
			<div
				onClick={() => setMobileNavOpen(false)}
				className={`md:hidden z-40 fixed bg-black text-white h-[200vh] w-[100vw] pt-52 transition duration-500 ${
					mobileNavOpen ? "translate-x-0" : "translate-x-[-200%]"
				}`}
			>
				<div className="fixed top-[0] left-6 flex gap-5">
					<Link href="/" className="w-32 z-50 lg:w-36 flex items-center">
						<img
							src="/images/logos/safezone-logo2.png"
							className="md:hidden h-auto w-auto lg:mr-10 object-contain"
							alt="SafeZone Logo"
						/>
					</Link>
				</div>
				<div
					className="absolute top-[8.2em] right-6"
					onClick={() => setMobileNavOpen(false)}
				>
					<CloseOutline height="35px" width="35px" color="white" />
				</div>
				<div className="flex justify-center mt-8">
					<ul className="px-10 grid gap-4">
						{navlinksChildren.map((link, i) => (
							<Link
								key={i}
								href={link.link || "#"}
								// onClick={() => setActiveLink(link.link)}
							>
								<li
									key={i}
									className={`${
										router.asPath.split("#")[0] === link.link
											? "underline text-[#00B2FF]"
											: activeLink == link.link && "underline text-[#00B2FF]"
									} block py-2 md:px-4 px-2 md:rounded hover:text-[#00B2FF] duration-300 decoration-2 underline-offset-2 hover:underline`}
									style={{ whiteSpace: "nowrap" }}
								>
									{link.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="mx-24 mt-24">
					<GradientButton1 title="Join Waitlist" />
				</div>
			</div>

			<nav
				className={`p-1 px-3 fixed top-0 w-full z-30 transition-all transition shadow md:shadow-none ${
					isScreenHeight ? "bg-white" : "md:bg-transparent bg-white"
				}`}
			>
				<div className="z-50 max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between">
					<Link href="/" className="w-32 z-50 lg:w-36 flex items-center">
						<img
							src={`${
								router.asPath === "/" && isScreenHeight
									? "/images/logos/safezone-logo.png"
									: router.asPath === "/" && !isScreenHeight
									? "/images/logos/safezone-logo2.png"
									: "/images/logos/safezone-logo.png"
							}`}
							className="md:flex hidden h-auto w-auto lg:mr-10 object-contain"
							alt="SafeZone Logo"
						/>
						<img
							src="/images/logos/safezone-logo.png"
							className="md:hidden h-auto w-auto lg:mr-10 object-contain"
							alt="SafeZone Logo"
						/>
					</Link>
					{/* {asPath === "/" && (
					<div className={`sticky bottom-2 h-auto w-auto hidden`}>
						<NavLinks />
					</div>
				)} */}
					<div className="z-50 flex items-center order-3 gap-4">
						<GradientButton1 title="Join Waitlist" />
						<div
							className="md:hidden cursor-pointer"
							onClick={() => setMobileNavOpen(!mobileNavOpen)}
						>
							<MenuOutline height="35px" width="35px" />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
