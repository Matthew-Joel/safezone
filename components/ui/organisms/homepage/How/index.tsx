import React from "react";

const How = () => {
    return (
        <div className="bg-white relative mt-28">
            <div className="text-center">
                <p className="text-4xl text-medium">How does safezone works?</p> 
                <p className="text-sm">safezone is simple and easy to use</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-14 mt-12">
                <div className="md:px-10 px-3 mt-5 flex flex-col gap-3">
                    <div className="flex justify-center">
                        <img src="../how/trust.png" alt="trans" className="w-[60px] h-[60px]"></img>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            The buyer and seller connect online and come to an
                             agreement on the price of a specific product or service.
                        </p>
                    </div>
                </div>
                <div className="md:px-10 px-3 mt-5 flex flex-col gap-3">
                    <div className="flex justify-center">
                        <img src="../how/smartphone.png" alt="trans" className="w-[60px] h-[60px]"></img>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            Once the buyer and seller have agreed on the price 
                            of the product or service, the buyer makes the payment 
                            to the seller through SafeZone. Our platform then sends 
                            a notification to the seller.
                        </p>
                    </div>
                </div>
                <div className="md:px-10 px-3 mt-5 flex flex-col gap-3">
                    <div className="flex justify-center">
                        <img src="../how/time-is-money.png" alt="trans" className="w-[60px] h-[60px]"></img>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            SafeZone holds the funds until the buyer receives 
                            the goods, products or services and confirms their 
                            satisfaction with the transaction. This ensures that 
                            the buyer's payment is protected and provides an added 
                            layer of security for both parties involved in the transaction.
                        </p>
                    </div>
                </div>
                <div className="md:px-10 px-3 mt-5 flex flex-col gap-3">
                    <div className="flex justify-center">
                        <img src="../how/send.png" alt="trans" className="w-[60px] h-[60px]"></img>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            Once the buyer clicks "pay", SafeZone immediately 
                            releases the funds to the seller's bank account. 
                            This ensures a seamless and efficient transaction 
                            process for both the buyer and the seller.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default How;