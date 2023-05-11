import React from "react";
import ContactComponent from "./contactcomponent";

const ContactUsHero = () => {
	return (
		<div className="">
			<div className="bg-contactpage_hero bg-cover lg:h-[100vh] h-auto w-screen -mt-28 md:pt-36">
				<div className="lg:mx-24 flex justify-center">
					<div className="container mt-20">
						<ContactComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsHero;
