import Image from "next/image";
import React from "react";

const ProtectYou = () => {
    return (
        <div className="bg-white w-full">
            <div className="lg:mx-24 md:mx-32 mt-10 mb-14">
                <div className="md:flex grid justify-center">
                    <div className="md:flex grid gap-[5em]">
                        <div className="h-full w-[30vw] hidden lg:flex">
                            <Image
                                src="/svg/group13.svg"
                                alt="scammer illustration"
                                className="object-contain w-80"
                                height={50}
                                width={50}
                            />
                        </div>
                        <div className="grid md:gap-3 gap-4 lg:w-3/5">
                            <div className="text-3xl font-medium xl:py-32 lg:py-16 md:py-12 xl:px-2 px-5">
                                we are here to <br />
                                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">
                                    protect you !
                                </span>
                                <p className="text-sm">
                                    The safezone app is designed to offer a secure payment 
                                    platform for both mobile and web users. Its digital 
                                    escrow service is a secure way of holding funds until 
                                    buyers confirm receipt of purchased items and express 
                                    satisfaction with the transaction. This reduces the 
                                    likelihood of fraud, giving users peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProtectYou;
