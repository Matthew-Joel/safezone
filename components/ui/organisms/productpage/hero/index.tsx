import React from "react";

const Hero = () => {
    return(
        <div className="bg-white md:h-[70vh] h-auto lg:h-[100vh] w-screen lg:mt-36 mt-28 mb-10">
            <div className="flex flex-wrap flex-row justify-center items-center">
                <img src="../images/logos/laptop-alone.png" alt="hero" className="w-auto h-auto lg:h-[350px]" />
                <p className="font-medium mt-3 md:mt-0 text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#80FF00]">What are we  building</p>
            </div>
            <div className="flex justify-center items-center lg:mx-[350px] mx-8 mt-5">
                <p className="text-sm text-center">Our team is in the process of developing a 
                secure payment platform aimed at safeguarding your hard-earned 
                money or goods from fraudulent individuals who present themselves
                 as genuine sellers or buyers. By creating a secure e-commerce 
                 ecosystem, our platform will provide a safe and trustworthy 
                 environment for all users.
                 </p>
            </div>
        </div>
    );
};
export default Hero;