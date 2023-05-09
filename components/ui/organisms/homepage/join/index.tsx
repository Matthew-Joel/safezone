import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Join = () => {
	const formState = {
		fullname: "",
		email: "",
	};
	const [state, setState] = useState(formState);
	const { email, fullname } = formState;
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email || !fullname) {
			toast.error("Invalid Credentials!", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return new Error("Invalid Credentials!");
		}
		try {
			setState(formState);
			// #Logic
			toast.success("Success! We'll send an email soon.", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error: any) {
			toast.error("Oops! An error occured. Please try again!", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	return (
		<form className="bg-white relative md:mt-40" onSubmit={handleSubmit}>
			<ToastContainer />
			<div className="lg:px-20 md:px-0 my-20">
				<div
					className="grid md:grid-cols-2 relative bg-gradientDeg"
					style={{
						background:
							'linear-gradient(-185.99deg, rgba(128, 255, 0, 0.5), rgba(0, 204, 255, 0.7) 50%), url("../images/patterns/safezone-pattern.jpg")',
						backgroundSize: "cover",
						backgroundRepeat: "repeat",
					}}
				>
					<div className="w-full flex items-center relative hidden md:block">
						<div className="absolute bottom-0 right-0 md:mr-16">
							<img
								src="../images/logos/mobile.png"
								alt="mobile"
								className="w-80 lg:w-full h-auto md:h-[400px] lg:h-100"
							/>
						</div>
					</div>
					<div className="md:w-full w-100 my-12 md:pr-5 md:mx-0 mx-8">
						<p className="text-3xl font-medium text-white">
							Ready to join the<br></br> safe-zone
						</p>
						<div className="mt-4 flex flex-col gap-y-6 md:pr-5 lg:pr-36">
							<div>
								<input
									type="text"
									placeholder="Full Name"
									className="rounded-lg text-sm placeholder:text-white/[.7] border-2 border-white/50 bg-[#00ccff]/[0.6] px-4 py-3 w-[100%]"
								/>
							</div>
							<div className="flex items-center justify-between gap-x-5">
								<input
									type="email"
									placeholder="Email Address"
									className="rounded-lg text-sm placeholder:text-white/[.7] bg-[#00ccff]/[0.6] border-2 border-white/50 px-4 py-3 w-[80%]"
								/>
								<button
									type="submit"
									className="rounded-lg py-1.5 px-2 lg:px-2 bg-[#030F35] text-white text-xs w-[40vw] md:w-[20vw] lg:w-[10vw]"
								>
									Join the waitlist
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
export default Join;
