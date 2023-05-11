import React from "react";
import Link from "next/link";
import {
	LogoFacebook,
	LogoLinkedin,
	LogoTwitter,
	LogoWhatsapp,
} from "react-ionicons";

const ContactDetails = () => {
	return (
		<div className="my-28">
			<div className="flex items-center justify-center">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center lg:text-start md:mx-16 mx-5 gap-10 items-center">
					<div className="pt-4 justify-center md:justify-center md:items-center">
						<h2 className="font-medium text-[#000]">Office Address</h2>
						<address className="text-[#000F43] font-thin text-xs">
							Atigraphity Workspace, Harmony Hub Ilorin, Kwara State.
						</address>
					</div>

					<div className="justify-center md:justify-center md:items-center">
						<h2 className="font-medium">Phone Number</h2>
						<Link
							href="tel:2348168187834"
							className="text-[#000F43] text-xs tracking-widest cursor-pointer"
						>
							+2348168187834
						</Link>
					</div>
					<div className="justify-center md:justify-center md:items-center">
						<h2 className="font-medium mb-0">Email</h2>
						<Link
							href="https:compay@safezone.ng"
							target="_blank"
							className="text-[#000F43] text-xs"
						>
							compay@safezone.ng
						</Link>
					</div>

					<div className="flex justify-center">
						<div className="grid items-center">
							<div className="">
								<h2 className="font-medium text-[#000F43]">Let&quot;s Connect</h2>
							</div>
							<div className="flex gap-5 justify-center item-center hover:cursor-pointer">
								<Link href="#">
									<div className="grayscale hover:grayscale-0">
										<LogoTwitter color="skyblue" />
									</div>
								</Link>
								<Link href="#">
									<div className="grayscale hover:grayscale-0">
										<LogoFacebook color="blue" />
									</div>
								</Link>
								<Link href="#">
									<div className="grayscale hover:grayscale-0">
										<LogoWhatsapp color="green" />
									</div>
								</Link>
								<Link href="#">
									<div className="grayscale hover:grayscale-0">
										<LogoLinkedin color="dodgerblue" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
