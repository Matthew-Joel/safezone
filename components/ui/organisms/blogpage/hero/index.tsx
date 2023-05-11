import React from "react";

const Hero = () => {
	return (
		<div className="bg-blog_pattern relative bg-cover flex items-center justify-center w-screen lg:h-[105vh] h-auto w-full -mt-28 md:py-36 py-44">
			<div className="absolute top-0 right-0 w-[100%] h-[100%] p-0 bg-[#E5F7FF]/[0.8]"></div>
			<div className="flex relative z-1 justify-center items-center flex-col gap-6">
				<img
					src="../images/blogging.png"
					alt="image"
					className="h-[23%] w-[23%] animate__animated animate__fadeInDown"
				/>
				<h1 className="text-3xl font-bold animate__animated animate__fadeInUp">
					safezone.blog
				</h1>
			</div>
		</div>
	);
};
export default Hero;
