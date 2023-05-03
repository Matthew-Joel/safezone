import React from "react";

const ButWhy = () => {
	return (
		<div
			className="bg-white relative py-28 px-12 mt-20"
			style={{
				background:
					'linear-gradient(222.99deg, rgba(250, 255, 255, 0.6), rgba(250, 255, 255, 0.6) 50%), url("../images/patterns/safezone-pattern.jpg")',
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-col items-center justify-center">
				<p className="text-4xl font-medium text-center">But why safezone?</p>
				<p className="text-sm md:w-[42%] text-center">
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
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4 w-full">
					<div className="px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/opacity.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Transparency</h2>
							<p className="text-sm">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/easy.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Easy to use</h2>
							<p className="text-sm">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className=" px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/mitigation.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Risk Free</h2>
							<p className="text-sm">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/encrypted.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Protection</h2>
							<p className="text-sm">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/fruit.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Seller's Interest</h2>
							<p className="text-sm">
								Once the buyer and seller have agreed on the price of the product or
								service, the buyer makes the payment to the seller through SafeZone. Our
								platform then sends a notification to the seller.
							</p>
						</div>
					</div>
					<div className="px-14 flex flex-col gap-3">
						<div className="flex justify-center">
							<img src="../why/lock.png" alt="trans" className="w-20 h-20"></img>
						</div>
						<div className="text-center mt-6">
							<h2 className="font-bold">Security</h2>
							<p className="text-sm">
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
