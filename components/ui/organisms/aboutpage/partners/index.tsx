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
				<div className="my-6">
					<div className="flex gap-6 mx-auto flex-col md:flex-row md:justify-around md:mx-4 items-center justify-center">
						<div className="">
							<PayStackLogo />
						</div>
						<div className="">
							<TechsityLogo />
						</div>
						<div className="">
							<MybrandhiveLogo />
						</div>
						<div className="">
							<ICPCLogo />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Partners;
