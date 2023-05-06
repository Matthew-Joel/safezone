import React from "react";

const Latest = () => {
    return (
        <div className="bg-white relative lg:mx-20 mx-8 my-20">
            <h1 className="text-2xl font-medium">
                Latest
            </h1>
            <div className="grid lg:flex lg:flex-row lg:space-x-14 mt-14 lg:mx-14">
                <div>
                    <img src="../images/product/african-female.jpg" alt="image" className="w-auto h-auto lg:w-[800px] lg:h-[220px]" />
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-xl font-bold mt-4 lg:mt-0">5 Tips for Avoiding E-Commerce Scammers</h2>
                    <p className="text-sm">Online shopping has become increasingly popular over the 
                    years, but unfortunately, so have e-commerce scammers. These scammers use 
                    various tactics to trick shoppers into giving away their personal information 
                    or money...
                    </p>
                    <div className="text-xs flex flex-col flex-col-reverse lg:flex-row lg:gap-4">
                        <button className="rounded-full w-[40vw] lg:w-full border-2 border-[#00CCFF] bg-gradient-to-r from-[#00CCFF]/[0.3] to-[#80FF00]/[0.2] py-1 px-3 text-black mt-2 lg:mt-0">Continue Reading</button>
                        <span>Posted on 12/03/2023</span>
                        <span>by: Darey Oloye</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Latest;