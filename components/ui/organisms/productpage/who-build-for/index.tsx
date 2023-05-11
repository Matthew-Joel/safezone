import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WhoBuildFor = () => {
	return (
		<div className="bg-white relative">
			<div className="px-4 md:px-12 py-14">
				<h1 className="font-bold text-black text-3xl text-center">
					Who are We Building for?
				</h1>
				<div className="grid mt-20 gap-20">
					<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
						<div className="grid lg:flex lg:flex-row mx-5 lg:mx-20 lg:space-x-14">
							<img
								src="../images/product/african-female.jpg"
								alt="image"
								className="w-auto h-auto lg:h-[320px]"
							/>
							<div className="flex flex-col gap-3 justify-center mx-18">
								<h1 className="text-3xl font-medium text-[#00CCFF] mt-3 lg:mt-0">
									For Buyers
								</h1>
								<p className="text-sm">
									Online payment fraud is a growing problem, with scammers constantly
									devising new ways to trick unsuspecting buyers out of their money. We
									are building a platform that prevent these scams by providing an extra
									layer of security and protection. As a buyer, you can trust that your
									money is secure with us until you receive the goods, products or
									services you ordered. You are in complete control of the transaction
									and have the ability to cancel it at any time. However, this can only
									be done when both parties agree that the transaction is invalid. We
									prioritize your safety and satisfaction throughout the entire
									transaction process.
								</p>
								<p className="text-sm">
									Also, we give peace of mind for buyers and confidence that their
									payment will be processed securely and efficiently. This can help to
									reduce anxiety and stress, allowing you as a buyer to focus on enjoying
									the purchasing process and the products or services you are buying.
								</p>
								<p className="text-[#00CCFF] cursor-pointer decoration hover:underline duration-300">
									Discover How {">>>"}
								</p>
							</div>
						</div>

						<div className="flex flex-col flex-col-reverse lg:flex lg:flex-row justify-center items-center mx-5 lg:mx-20 lg:space-x-8">
							<div className="flex flex-col gap-3 justify-center mx-18">
								<h1 className="text-3xl font-medium text-[#00CCFF] mt-3 lg:mt-0">
									For Sellers
								</h1>
								<p className="text-sm">
									We are building a secure payment platform that provides protection
									against payment fraud, Fake alerts and chargebacks, which are common
									risks associated with online transactions. By using our solution,
									sellers can verify the authenticity of the payment and ensure that it
									is legitimate before shipping the product or delivering the service.
								</p>
								<p className="text-sm">
									Our solution provides a reliable and efficient way for sellers to
									receive payments from customers. This helps to streamline the payment
									process, reducing the risk of delays or other complications that could
									negatively impact your business.
								</p>
								<p className="text-sm">
									We are creating a platform that help to build trust between you and
									your customer, which is essential for building a successful e-commerce
									business. By providing a secure and trustworthy payment platform, you
									can establish yourself as reputable and reliable, leading to increased
									customer loyalty and repeat business.
								</p>
								<p className="text-[#00CCFF] cursor-pointer decoration hover:underline duration-300">
									Join the waitlist {">>>"}
								</p>
							</div>
							<img
								src="../images/product/young-girl.jpg"
								alt="image"
								className="w-auto h-auto lg:h-[320px]"
							/>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
						<div className="grid lg:flex lg:flex-row mx-5 lg:mx-20 lg:space-x-8">
							<img
								src="../images/product/shopping-cart.jpg"
								alt="image"
								className="w-auto h-auto lg:h-[320px]"
							/>
							<div className="flex flex-col gap-4 justify-center mx-18">
								<h1 className="text-3xl font-medium text-[#00CCFF] mt-3 lg:mt-0">
									For E-Commerce Platforms
								</h1>
								<p className="text-sm">
									<span className="font-bold">For E-Commerce Platform,</span> by
									utilizing our payment solution and APIs on your E-Commerce Platform,
									you can provide a reliable and secure platform for users to buy and
									sell. This ensures that all transactions carried out on your website or
									app are safe and secure, which in turn builds trust among users. As a
									result, you can attract more users to your platform and increase user
									adoption.
								</p>
								<p className="text-[#00CCFF] cursor-pointer decoration hover:underline duration-300">
									Get Started {">>>"}
								</p>
							</div>
						</div>
					</AnimationOnScroll>
				</div>
			</div>
			<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
				<div className="flex justify-center lg:mx-[400px] mx-20 my-16">
					<p className="text-lg text-[#010923] font-medium text-center leading-8">
						Our Goal is to archive an eco-system where buying and selling online comes
						with peace of mind and confidence knowing that your money and goods are
						safe.
					</p>
				</div>
			</AnimationOnScroll>
		</div>
	);
};
export default WhoBuildFor;
