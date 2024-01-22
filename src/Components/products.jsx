import React from "react";
import { Icon } from "@iconify-icon/react";

const Product=()=>{
    return( 
    <section className="flex flex-col justify-center items-center gap-12 p-6 bg-[#ebebeb]" id="products">
        <div className="font-extrabold text-4xl text-center">We craft<span className="text-[#3B71FC]"> innovative products</span></div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-20">
            <div className="bg-white p-12 flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center bg-[#3B71FC] p-5 rounded-full text-white">
                    <Icon icon="ep:finished" width={60} height={60}/>
                </div>
                <p className="text-[#3B71FC] font-bold text-2xl">12+</p>
                <p className="font-bold text-2xl">PROJECTS FINISHED</p>
            </div>
            <div className="bg-white p-12 flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center bg-[#3B71FC] p-5 rounded-full text-white">
                    <Icon icon="streamline:happy-face" width={60} height={60}/>
                </div>
                <p className="text-[#3B71FC] font-bold text-2xl">500+</p>
                <p className="font-bold text-2xl">Happy clients</p>
            </div>
            <div className="bg-white p-12 flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center bg-[#3B71FC] p-5 rounded-full text-white">
                    <Icon icon="arcticons:pixel-experience" width={60} height={60}/>
                </div>
                <p className="text-[#3B71FC] font-bold text-2xl">3+</p>
                <p className="font-bold text-2xl">Years of experience</p>
            </div>
        </div>
    </section>
)}

export default Product;