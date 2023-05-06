import React from "react";

const Recent = () => {
    return (
        <div className="bg-white relative mt-20">
            <div className="">
                <h1 className="font-medium text-center text-2xl">Recent Articles</h1>
                <div className="grid md:grid-cols-3 gap-12 md:gap-5 mt-14 mx-8 lg:mx-36">
                    <div className="flex flex-col gap-2">
                        <img src="../images/product/young-girl.jpg" alt="" className="w-auto h-[200px]" />
                        <h2 className="text-xl ml-4 font-bold">What is safezone</h2>
                        <p className="text-xs ml-4 flex flex-col lg:flex-row gap-2">
                            <span>Posted on 12/03/2023</span> 
                            <span>by: Darey Oloye</span>
                        </p>
                        <button className="rounded-full ml-4 border-2 border-[#00CCFF] bg-gradient-to-r from-[#00CCFF]/[0.3] to-[#80FF00]/[0.2] py-2 w-[20vw] md:w-[10vw] text-black text-xs">Read Now</button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src="../images/product/young-girl.jpg" alt="" className="w-auto h-[200px]" />
                        <h2 className="text-xl ml-4 font-bold">E-Commerce in Africa</h2>
                        <p className="text-xs ml-4 flex flex-col lg:flex-row gap-2">
                            <span>Posted on 12/03/2023</span>
                            <span>by: Darey Oloye</span>
                        </p>
                        <button className="rounded-full ml-4 border-2 border-[#00CCFF] bg-gradient-to-r from-[#00CCFF]/[0.3] to-[#80FF00]/[0.2] py-2 w-[20vw] md:w-[10vw] text-black text-xs">Read Now</button>
                    </div>
                    <div className="relative">
                        <div className="flex flex-col gap-2">
                            <img src="../images/product/young-girl.jpg" alt="" className="w-auto h-[200px]" />
                            <h2 className="text-xl font-bold ml-4">How Cyber-Theft work</h2>
                            <p className="text-xs flex flex-col ml-4 lg:flex-row gap-2">
                                <span>Posted on 12/03/2023</span>
                                <span>by: Darey Oloye</span>
                            </p>
                            <button className="rounded-full ml-4 border-2 border-[#00CCFF] bg-gradient-to-r from-[#00CCFF]/[0.3] to-[#80FF00]/[0.2] py-2 w-[20vw] md:w-[10vw] text-black text-xs">Read Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Recent;