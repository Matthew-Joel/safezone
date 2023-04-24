import React from "react";

const ECommerce = () => {
    return (
        <div>
            <div className="bg-[#030F35] relative mt-5">
                <div className="md:mx-14 mx-8 grid md:flex md:flex-col-2 justify-center items-center">
                    <div className="lg:w-1/2 my-12 md:pl-8">
                        <p className="text-white md:w-3/4 font-medium text-3xl md:text-5xl">
                            safezone, the future of e-commerce transaction
                        </p>
                        <p className="text-white text-sm mt-8">
                            <span className="text-[#00CCFF]">As a buyer,</span> you can trust that your money 
                            is secure with us until you receive the goods, 
                            products or services you ordered. You are in 
                            complete control of the transaction and have the 
                            ability to cancel it at any time. However, this 
                            can only be done when both parties agree that the 
                            transaction is invalid. We prioritize your safety 
                            and satisfaction throughout the entire transaction process.
                        </p>
                        <p className="text-white text-sm mt-6">
                            <span className="text-[#F37A50]">As a Seller,</span> be rest assured that, we will keep 
                            you informed and involved at every stage of the 
                            transaction process to ensure the safety of your 
                            goods, products or services. We will provide clear 
                            communication on each transaction, and only when you 
                            declare a transaction invalid will it be terminated. 
                            You can trust us to prioritize your safety and well-being 
                            throughout the transaction process.
                        </p>
                        <p className="text-white text-sm mt-6">
                            <span className="font-bold">As E-Commerce Platform,</span> by utilizing our payment 
                            solution and APIs on your E-Commerce Platform, you 
                            can provide a reliable and secure platform for users 
                            to buy and sell. This ensures that all transactions 
                            carried out on your website or app are safe and secure, 
                            which in turn builds trust among users. As a result, you 
                            can attract more users to your platform and increase user adoption.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative hidden md:hidden lg:flex justify-center md:my-12">
                        <div>
                            <img src="../logos/name 2.png" className="w-[30vw]"></img>
                        </div>
                        <div className="absolute">
                            <img src="../logos/laptop-alone.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ECommerce;