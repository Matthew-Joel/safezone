import React from "react";

const Hero = () => {
	return (
		<div className="bg-white h-auto lg:h-[100vh] w-screen lg:mt-36 mt-28 mb-10">
			<div className="md:flex justify-center">
				<div className="lg:flex items-center">
					<img
						src="../images/logos/laptop-alone.png"
						alt="hero"
						className="w-auto h-auto lg:h-[350px]"
					/>
					<p
						className="text-center font-medium mt-3 md:mt-0 text-4xl md:text-5xl lg:w-1/2 text-transparent bg-clip-text
                px-6 bg-gradient-to-r from-[#00CCFF] to-[#80FF00]"
					>
						What are we building
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center lg:mx-[350px] mx-8 mt-5">
				<p className="lg:text-center">
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
