import React from "react";

const Join = () => {
    return (
        <div className="bg-white relative md:mt-40">
            <div className="lg:mx-20 md:mx-0 my-20">
                <div className="grid md:grid-cols-2 bg-[blue]/[.25]">
                    <div className="w-full flex items-center relative hidden md:block">
                        <div className="absolute bottom-0 right-0 md:mr-16">
                            <img src="../logos/mobile.png" alt="mobile" className="w-80 lg:w-full h-auto md:h-[400px] lg:h-100" />
                        </div>
                    </div>
                    <div className="md:w-full w-100 my-12 md:pr-5 md:mx-0 mx-8">
                        <p className="text-3xl font-medium text-white">Ready to join the<br></br> safe-zone</p>
                        <div className="mt-4 flex flex-col gap-y-6 md:pr-5 lg:pr-36">
                            <div>
                                <input type="text" placeholder="Full Name" className="rounded-lg text-sm placeholder:text-white/[.7] bg-[#fff]/[.2] px-4 py-3 w-[100%]" />
                            </div>
                            <div className="flex items-center justify-between gap-x-5">
                                <input type="text" placeholder="Email Address" className="rounded-lg text-sm placeholder:text-white/[.7] bg-[#fff]/[.2] px-4 py-3 w-[80%]" />
                                <button className="rounded-lg py-1.5 px-2 lg:px-2 bg-[#030F35] text-white text-xs w-[40vw] md:w-[20vw] lg:w-[10vw]">
                                    Join the waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Join;