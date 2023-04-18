import Image from "next/image";

export const WebSecurityIcon1 = () => {
	return (
		<div className="lg:w-40 w-36">
			<Image
				height={100}
				width={100}
				alt="Web security"
				className="object-contain w-full"
				src="/images/web_security_1.png"
			/>
		</div>
	);
};

export const HomeHeroMobileIcon = () => {
	return (
		<div className="lg:w-72 w-48">
			<Image
				height={100}
				width={100}
				alt="mobile phone"
				className="object-contain w-full"
				src="/images/mobile_phone.png"
			/>
		</div>
	);
};

export const LockIcon = () => {
	return (
		<div className="w-8">
			<Image
				height={100}
				width={100}
				alt="lock icon"
				className="object-contain w-full"
				src="/images/lock.png"
			/>
		</div>
	);
};

export const TimeSandIcon = () => {
	return (
		<div className="w-8">
			<Image
				height={100}
				width={100}
				alt="time icon"
				className="object-contain w-full"
				src="/images/time.png"
			/>
		</div>
	);
};

export const PendingIcon = () => {
	return (
		<div className="w-14">
			<Image
				height={100}
				width={100}
				alt="pending icon"
				className="object-contain w-full"
				src="/images/pending.png"
			/>
		</div>
	);
};

export const GuardIcon = () => {
	return (
		<div className="w-10">
			<Image
				height={100}
				width={100}
				alt="guard icon"
				className="object-contain w-full"
				src="/images/shield.png"
			/>
		</div>
	);
};
