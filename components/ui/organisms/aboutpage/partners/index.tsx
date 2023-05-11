import React from "react";
import {
	PayStackLogo,
	TechsityLogo,
	MybrandhiveLogo,
	ICPCLogo,
} from "../../../common/icons";

const Partners = () => {
	return (
		<div className="border-y-2 flex-wrap justify-center items-center mt-6">
			<div className="grid flex-col md:flex-row gap-x-6 my-10">
				<p className="text-black justify-center items-center font-medium text-center px-5">
					Here are some of our partners... all just to keep your money safe!
				</p>
				<div className="my-10 flex justify-center items-center">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 items-center">
						<div className="grayscale hover:grayscale-0 flex justify-center duration-300">
							<PayStackLogo />
						</div>
						<div className="grayscale hover:grayscale-0 flex justify-center duration-300">
							<TechsityLogo />
						</div>
						<div className="grayscale hover:grayscale-0 flex justify-center duration-300">
							<MybrandhiveLogo />
						</div>
						<div className="grayscale hover:grayscale-0 flex justify-center duration-300">
							<ICPCLogo />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Partners;
