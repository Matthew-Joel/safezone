import React from "react";

const ButWhy = () => {
	return (
		<div
			className="relative py-28 px-5 md:px-12 mt-20 bg-opacity-10"
			style={{
				background:
					'linear-gradient(222.99deg, rgba(250, 255, 255, 0.6), rgba(250, 255, 255, 0.6) 80%), url("../images/patterns/safezone-pattern.jpg")',
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-col gap-4 items-center justify-center">
				<p className="text-4xl font-medium text-center">But why safezone?</p>
				<p className="md:text-sm lg:text-left md:w-[42%] text-center">
					Buying and selling online can be risky, but with SafeZone, you can be
					confident that your money is safe until you receive the goods, products or
					services you ordered.
				</p>
			</div>
			<div>
				<div className="flex justify-center my-14">
					<img src="../svg/group7.svg" alt="trans" className="w-100 h-100"></img>
				</div>
			</div>
			<div className="flex justify-center items-center w-full">
				<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-4 w-full">
					<div className="md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img
								src="/images/why/opacity.png"
								alt="trans"
								className="w-20 h-20"
							></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Transparency</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="/images/why/easy.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Easy to use</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className=" md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img
								src="/images/why/mitigation.png"
								alt="trans"
								className="w-20 h-20"
							></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Risk Free</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img
								src="/images/why/encrypted.png"
								alt="trans"
								className="w-20 h-20"
							></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Protection</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="/images/why/fruit.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Seller&apos;s Interest</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="md:px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="/images/why/lock.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h1 className="font-bold">Security</h1>
							<p className="md:text-sm lg:text-left">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ButWhy;
