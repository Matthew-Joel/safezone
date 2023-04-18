import Link from "next/link";
import React from "react";
import { GradientButton1 } from "../../common/buttons";
import NavLinks from "./NavLinks";

const Navbar = () => {
	return (
		// <nav className="p-3 fixed top-0 w-full z-50">
		<nav className="p-3 ">
			<div className="z-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/" className="w-32 lg:w-36 flex items-center">
					<img
						src="../images/safezone_logo_light.png"
						className="h-auto w-auto lg:mr-10 object-contain"
						alt="SafeZone Logo"
					/>
				</Link>
				<div className="z-50 flex items-center order-3">
					<GradientButton1 title="Join Waitlist" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
