import React from "react";
import NavLinks from "../../../layout/nav/NavLinks";

const ContactComponent = () => {
	return (
		<div className="w-full">
			<div className="flex justify-center items-center text-center">
				<div className="flex relative justify-center items-center h-[50vh]">
					<div className="flex md:flex h-screen justify-center items-center absolute">
						<div className="justify-center text-center space-y-32 absolute">
							<div className="text-3xl text-white">
								<h1 className="">Contact Us</h1>
							</div>
							<div className="sticky z-10 w-full mt-12">
								<div className="flex justify-center items-center">
									<NavLinks />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;
