import React from "react";

const BeSafe = () => {
	return (
		<div className="bg-[#030F35] relative flex justify-center mt-20">
			<div className="mx-14 grid md:grid-cols-2 gap-x-6">
				<div className="my-8 flex flex-col items-end text-end">
					<p className="text-white font-medium md:text-2xl lg:text-3xl">
						Be on the safer side. <br></br>
						always request to pay with
					</p>
					<img
						src="../images/logos/safezone-logo2.png"
						className="h-auto w-36 md:w-48 lg:w-52 object-contain"
						alt="SafeZone Logo"
					/>
				</div>
				<div className="hidden w-full relative flex items-center md:block">
					<div className="absolute -bottom-5 lg:bottom-0 right-0">
						<img
							src="../images/web_security_1.png"
							className="h-auto w-80 object-contain"
							alt="Web Security Logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BeSafe;
