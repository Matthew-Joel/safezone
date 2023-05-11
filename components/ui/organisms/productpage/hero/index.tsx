import Image from "next/image";
import React from "react";
import NavLinks from "../../../layout/nav/NavLinks";

const Hero = () => {
	return (
		<div className="bg-white h-auto lg:h-[80vh] w-screen lg:mt-12 mt-28 mb-10">
			<div className="sticky xl:mt-[-8%] h-auto z-10 w-full xl:mb-[8%]">
				<div className="flex justify-center">
					<NavLinks />
				</div>
			</div>
			<div className="md:flex justify-center">
				<div className="lg:flex items-center">
					<div className="flex items-center relative">
						<img
							src="/images/logos/laptop-alone.png"
							alt="hero"
							className="w-auto h-auto lg:h-[350px]"
						/>
						<img
							src="/images/3D/online_shopping_bag.png"
							alt="online_shopping_bag.png"
							className="w-1/3 h-1/3 absolute right-16 bottom-16 animate__animated animate__fadeInLeft"
						/>
					</div>
					<p
						className="animate__animated animate__fadeInRight text-center font-medium mt-3 md:mt-0 text-4xl md:text-5xl lg:w-1/2 text-transparent bg-clip-text
                px-6 bg-gradient-to-r from-[#00CCFF] to-[#80FF00]"
					>
						What are we building?
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center xl:mx-[350px] md:mx-12 mt-5">
				<p className="text-justify mx-3">
					Our team is in the process of developing a secure payment platform aimed at
					safeguarding your hard-earned money or goods from fraudulent individuals
					who present themselves as genuine sellers or buyers. By creating a secure
					e-commerce ecosystem, our platform will provide a safe and trustworthy
					environment for all users.
				</p>
			</div>
		</div>
	);
};
export default Hero;
