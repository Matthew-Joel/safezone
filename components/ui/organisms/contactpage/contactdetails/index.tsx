import React from "react";
import Link from "next/link";

const ContactDetails = () => {
	return (
		<div className="my-28">
			<div className="flex items-center justify-center">
				<div className="flex flex-col text-center space-y-4 md:flex-row lg:space-x-20 md:space-x-4 lg:text-start md:mx-5">
					<div className="pt-4 justify-center md:justify-center md:items-center">
						<h2 className="font-medium text-[#000]">Office Address</h2>
						<address className="text-[#000F43] font-thin text-xs">
							Atigraphity Workspace, Harmony Hub Ilorin, Kwara State.
						</address>
					</div>

					<div className="justify-center md:justify-center md:items-center">
						<h2 className="font-medium">Phone Number</h2>
						<p className="text-[#000F43] text-xs tracking-widest">08168187834</p>
					</div>
					<div className="justify-center md:justify-center md:items-center">
						<h2 className="font-medium mb-0">Email</h2>
						<Link
							href="https:compay@safezone.ng"
							className="text-[#000F43] text-xs"
						>
							compay@safezone.ng
						</Link>
					</div>

					<div className="">
						<div className="">
							<h2 className="font-medium text-[#000F43]">Let&quot;s Connect</h2>
						</div>
						<div className="flex gap-5 justify-center item-center hover:cursor-pointer">
							<Link href="/" ><img src="./icons/Twitter.png" alt="Twitter" /></Link>
							<Link href="/"><img src="./icons/Facebook.png" alt="Facebook" /></Link>
							<Link href="/"><img src="./icons/Telegram.png" alt="Telegram" /></Link>
							<Link href="/"><img src="./icons/Linkedin.png" alt="Facebook" /></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
