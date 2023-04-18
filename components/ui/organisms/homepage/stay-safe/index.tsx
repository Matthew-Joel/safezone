import Image from "next/image";
import React from "react";

const StaySafe = () => {
	return (
		<div className="bg-white w-full">
			<div className="lg:mx-24 md:mx-32 lg:mt-36 mt-12">
				<div className="md:flex grid justify-center">
					<div className="md:flex grid gap-[5em]">
						<div className="grid md:gap-3 gap-4 lg:w-3/5">
							<div className="text-3xl font-medium xl:py-32 lg:py-16 md:py-12 xl:px-2 px-5">
								stay safe...anyone can <br />
								<span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
									scam you !
								</span>
								<p className="text-sm">
									The issue of online fraud in the context of social media buying and
									selling is a significant concern, resulting in losses worth millions of
									dollars annually and impacting countless individuals who fall victim to
									these scams. As a buyer or seller, it's crucial to have access to a
									secure and trustworthy online platform for carrying out transactions
									without the fear of being defrauded.
								</p>
							</div>
						</div>
						<div className="h-full w-[30vw] hidden lg:flex">
							<Image
								src="/images/scammer_illustration.png"
								alt="scammer illustration"
								className="object-contain w-full"
								height={100}
								width={100}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StaySafe;
