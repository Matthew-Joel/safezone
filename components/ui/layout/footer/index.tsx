import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<div className="mt-12 grid md:grid-cols-4 md:space-x-4 md:mx-14 mx-8 mb-12">
				<div className="w-full flex flex-col gap-y-2 mt-5">
					<div className="">
						<Link href="/" className="w-32 lg:w-36 flex items-center">
							<img
								src="../images/safezone_logo_light.png"
								className="h-auto w-auto lg:mr-10 object-contain"
								alt="SafeZone Logo"
							/>
						</Link>
					</div>
					<div className="mt-2">
						<p className="text-sm md:w-3/4">
							It's better to be safe than sorry...
							always request to pay with safezone.
						</p>
					</div>
				</div>
				<div className="w-full flex flex-col gap-y-2 mt-5">
					<div className="">
						<h2 className="font-bold">Company</h2>
					</div>
					<div className="space-y-3">
						<p className="text-sm md:w-3/4">
							No 29, Adeoluwa Street Oguloloa Junction Ilorin, Kwara State.
						</p>
						<p className="text-sm">About Us</p>
					</div>
				</div>
				<div className="w-full flex flex-col gap-y-3 mt-5">
					<div className="">
						<h2 className="font-bold">Resources</h2>
					</div>
					<div className="md:space-y-2">
						<p className="text-sm">Blog</p>
						<p className="text-sm">Term and Privacy</p>
					</div>
				</div>
				<div className="w-full flex flex-col gap-y-3 mt-5">
					<div className="">
						<h2 className="font-bold">Let's Connect</h2>
					</div>
					<div className="md:space-y-2">
						<p className="text-sm">Facebook</p>
						<p className="text-sm">LinkedIn</p>
						<p className="text-sm">Twitter</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
