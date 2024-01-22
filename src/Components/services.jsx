import React from "react";

const Services=()=>{
    return( 
    <section className="service pt-60" id="services">
    <div className="flex flex-col justify-center items-center bg-[#1e1b1bdd] p-8">
        <div className="text-white font-extrabold text-4xl">SERVICES</div>
        <div className="flex md:flex-row flex-col justify-center md:gap-28 gap-20 items-center p-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-orange-600 font-extrabold text-8xl">01</p>
                <div className="text-white text-2xl font-semibold flex flex-col justify-center items-center">
                    <p>Development</p>
                    <p>Technologies</p>
                </div>
                <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit nullam nunc justo sagittis 
                suscipit ultrices.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-orange-600 font-extrabold text-8xl">02</p>
                <div className="text-white text-2xl font-semibold flex flex-col justify-center items-center">
                    <p>Creation</p>
                    <p>& Selection</p>
                </div>
                <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit nullam nunc justo sagittis 
                suscipit ultrices.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-orange-600 font-extrabold text-8xl">03</p>
                <div className="text-white text-2xl font-semibold flex flex-col justify-center items-center">
                    <p>Launching</p>
                    <p>your campaign</p>
                </div>
                <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit nullam nunc justo sagittis 
                suscipit ultrices.
                </p>
            </div>
        </div>
     </div>
        
    </section>
)}

export default Services;