import { LockIcon } from "../../../common/icons";
import AboutComponent from "./aboutcomponent";

const AboutHero = () => {
	return (
		<div className="w-full relative">
			<div className="bg-gradient-to-r pb-6 from-[#00ccff25] to-[#00CCFF1A]-80 h-auto w-screen -mt-28 md:pt-36">
				<div className="lg:mx-24 justify-center">
					<div className="flex relative w-full justify-center items-center bg-no-repeat bg-contain">
						<img
							src="/logos/mobile annd laptop.png"
							alt="mobile and Laptop"
							width={778}
							height={386}
							className="mt-14"
						/>
						<div className="absolute top-13 bottom--2 right-14 sm:right-20 md:top-18 md:right-55 md:mr-20 lg:right-52 lg:mr-56 animate__animated animate__tada animate__infinite animate__slow">
							<LockIcon />
						</div>
					</div>
					<div className="container justify-center items-center">
						<AboutComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
