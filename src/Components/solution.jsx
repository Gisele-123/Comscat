import React from "react";
import solution from "../Assets/home.png"
const Solution=()=>{
    return (
    <section id="sln" className="flex flex-col justify-center items-center gap-14 px-14 py-4">
        <div className="flex flex-col text-3xl font-bold justify-center items-center">
            <p className="text-[#1455FF]">Innovative solutions</p>
            <p>& Development programs</p>
        </div>
        <div>
            <img src={solution} alt="" />
        </div>
    </section>
)}
export default Solution;