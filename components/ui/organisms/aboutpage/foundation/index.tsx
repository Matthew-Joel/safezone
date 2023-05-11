import React from "react";

const Foundation = () => {
	return (
		<div className="bg-white w-full justify-center items-center">
			<div className="grid justify-center items-center">
				<div className="flex flex-col md:flex-row justify-center items-center lg:mt-20">
					<div className="justify-center items-center flex md:flex">
						<img
							src="/images/Web Security 2.png"
							alt="Foundation on Trust"
							className="object-contain w-80 md:w-auto md:h-auto"
							height={50}
							width={50}
						/>
					</div>
					<div className="grid mx-5 md:gap-3 lg:w-3/5 justify-center items-center">
						<div className="text-3xl font-medium xl:py-22 lg:py-16 md:py-12 xl:px-2 px-5">
							<h2 className="mb-2 text-center text-#000">
								Our Foundation is built
								<span className="font-medium ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
									On Trust
								</span>
							</h2>
							<p className="text-sm text-[#000F43]">
								We know that each transaction denotes a mutual understanding
								between a purchaser and a vendor to swap merchandise or services
								in return for compensation. safezone hold the buyer&lsquo;s funds
								securely in an escrow account until all the specified
								transactions are completed, and the complaint period has ended.
								Upon completion, the funds are promptly released to the seller.
							</p>
							<p className="text-sm mt-5 text-[#000F43]">
								safezone is an affordable, adaptable, and distinctive payment
								solution that is universally compatible. safezone can be
								utilized on any platform, including laptops, phones, or tablets,
								to conduct transactions with absolute confidence.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Foundation;
