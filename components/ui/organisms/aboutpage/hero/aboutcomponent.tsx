import React from "react";
import NavLinks from "../../../layout/nav/NavLinks";
import Headings from "../../../common/heading";

const AboutComponent = () => {
	return (
		<div className="justify-center items-center text-center md:mr-65">
			<div className="flex justify-center items-center">
				<div className="flex flex-col justify-center items-center md:w-1/2 text-center">
					<div className="">
						<h1 className="md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
							<Headings title="About Us" />
						</h1>
						<p className="flex justify-center items-center px-5 text-[#000F43] text-center text-sm">
							SafeZone is a secure digital escrow payment solution designed to cater to
							and protect online buyers and sellers from falling victim to fraudulent
							activities perpetrated by individuals posing as genuine. Our platform
							provides an added layer of security for online transactions, ensuring
							that funds are safely held until both parties are satisfied with the
							transaction.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
