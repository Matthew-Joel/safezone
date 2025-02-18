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
							It&apos;s better to be safe than sorry... always request to pay with safezone.
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
						<Link href="#">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								About Us
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full flex flex-col gap-y-3 mt-5">
					<div className="">
						<h2 className="font-bold">
							Resources
						</h2>
					</div>
					<div className="md:space-y-2">
						<Link href="/blog">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								Blog
							</p>
						</Link>
						<Link href="#">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								Term and Privacy
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full flex flex-col gap-y-3 mt-5">
					<div className="">
						<h2 className="font-bold">
							Let&apos;s Connect
						</h2>
					</div>
					<div className="md:space-y-2">
						<Link href="#">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								Facebook
							</p>
						</Link>
						<Link href="#">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								LinkedIn
							</p>
						</Link>
						<Link href="#">
							<p className="text-sm decoration hover:underline decoration-blue-600 duration-300">
								Twitter
							</p>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
