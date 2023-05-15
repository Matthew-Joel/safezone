import React from "react";
import NavLinks from "../../../layout/nav/NavLinks";

const WhyBuild = () => {
	return (
		<div className="bg-[#00CCFF]/[.1]">
			<div className="px-8 lg:px-12 py-14">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-medium text-black">Why are we Building</h2>
				</div>
				<div className="mt-4 flex justify-center items-center relative">
					<img
						src="../images/3D/3D00659.png"
						alt="image"
						className="w-auto h-[300px] z-10"
					/>
					<div className="hidden md:flex absolute bg-white bg-opacity-50 p-[150px] px-[180px] rounded-full"></div>
					<div className="hidden md:flex absolute bg-white bg-opacity-30 p-[210px] px-[240px] rounded-full"></div>
					<div className="hidden md:flex absolute bg-white bg-opacity-20 p-[250px] px-[290px] rounded-full"></div>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6 items-center">
					<div className="px-4 lg:px-12 flex flex-col gap-4 justify-center items-center">
						<h1 className="font-bold text-3xl">1</h1>
						<p className="text-sm text-justify mx-3">
							Firstly, to protect both buyers and sellers from online fraud and scams,
							which are unfortunately prevalent in today&apos;s digital landscape. By
							providing a secure and trustworthy platform for transactions, users can
							be confident that their financial information and personal data is
							protected from unauthorized access.
						</p>
					</div>
					<div className="px-4 lg:px-12 flex flex-col gap-4 justify-center items-center">
						<h1 className="font-bold text-3xl">2</h1>
						<p className="text-sm text-justify mx-3">
							Additionally, to ensures that transactions are carried out smoothly and
							efficiently, with no unnecessary delays or complications. This helps to
							build trust between buyers and sellers, which is crucial for the success
							of any online marketplace.
						</p>
					</div>
					<div className="px-4 lg:px-12 flex flex-col gap-4 justify-center items-center">
						<h1 className="font-bold text-3xl">3</h1>
						<p className="text-sm text-justify mx-3">
							Finally, to give peace of mind for all parties involved in a transaction.
							Knowing that their money or goods are safe and secure can help to reduce
							stress and anxiety, allowing users to focus on the more enjoyable aspects
							of buying and selling online.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WhyBuild;
