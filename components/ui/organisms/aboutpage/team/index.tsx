import React from "react";
import Headings from "../../../common/heading";
import { LogoLinkedin } from "react-ionicons";
import Link from "next/link";

const MeetTeam = () => {
	return (
		<div className="bg-[#030F35] mt-10">
			<div className="md:mx-14 mx-8 py-14 md:flex md:flex-col-2 justify-center items-center text-center text-white">
				<div className="justify-center my-5">
					<div className="mb-10">
						<Headings title="Meet The Team" />
					</div>

					<div className="flex flex-col gap-20 md:flex-row md:gap-20 justify-center items-center text-center box-border">
						<div className="text-[#fff]">
							<img
								src="/images/Person1.png"
								alt="Darey Oloye"
								className="gradient-bg border-bg pb-2 pl-2"
							/>
							<h2 className="font-bold text-xl mt-5">Darey Oloye</h2>
							<p className="text-sm">Founder and CEO</p>
							<div className="flex justify-center items-center">
								<Link href="#">
									<LogoLinkedin color="dodgerblue" height="30px" width="30px" />
								</Link>
							</div>
						</div>
						<div className="text-[#fff] text-sm grid items-center gap-2">
							<img
								src="/images/Person2.png"
								alt="Ayo Jerry"
								className="gradient-bg border-bg pb-2 pl-2"
							/>
							<h2 className="font-bold text-xl mt-5">Ayo Jerry</h2>
							<p className="text-sm">Technical Lead</p>
							<div className="flex justify-center items-center">
								<Link href="#">
									<LogoLinkedin color="dodgerblue" height="30px" width="30px" />
								</Link>
							</div>
						</div>
						<div className="text-[#fff] text-sm grid items-center gap-2">
							<img
								src="/images/Person3.png"
								alt="Damilola Onoshi"
								className="gradient-bg border-bg pb-2 pl-2"
							/>
							<h2 className="font-bold text-xl mt-5">Damilola Onoshi</h2>
							<p className="text-sm">Creative Designer</p>
							<div className="flex justify-center items-center">
								<Link href="#">
									<LogoLinkedin color="dodgerblue" height="30px" width="30px" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MeetTeam;
