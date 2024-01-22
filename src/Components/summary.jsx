import React from "react";
import { Icon } from "@iconify-icon/react";

const Summary=()=>{
    return (
    <section className="flex md:flex-row flex-col justify-between gap-10 px-14 py-4" id="summary">
        <div className="bg-[#3B71FC] flex flex-col justify-center items-center p-5 gap-5 text-white transition-transform duration-500 transform hover:-translate-y-4">
            <div className="bg-white rounded-full flex justify-center items-center w-20 h-20">
                <Icon icon="dashicons:awards" width={44} height={46} className="text-[#3B71FC]"/>
            </div>
            <div className="font-extrabold">
                <p>AWARDS</p>
                <p>& HONOR</p>
            </div>
            <p className="font-semibold">Duis aute irure dolor in repreh​enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <a href="#" className="font-extrabold hover:text-[#adbdfe]">MORE</a>
        </div>
        <div className="bg-[#edeff5] flex flex-col justify-center items-center p-5 gap-5 text-black transition-transform duration-500 transform hover:-translate-y-4">
            <div className="bg-[#3B71FC] rounded-full flex justify-center items-center w-20 h-20">
                <Icon icon="cib:skillshare" width={44} height={46} className="text-white"/>
            </div>
            <div className="font-extrabold">
                <p>SKILLS</p>
                <p>& ABILITIES</p>
            </div>
            <p className="font-semibold">Duis aute irure dolor in repreh​enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <a href="#" className="font-extrabold hover:text-[#adbdfe]">MORE</a>
        </div>
        <div className="bg-[#3B71FC] flex flex-col justify-center items-center p-5 gap-5 text-white transition-transform duration-500 transform hover:-translate-y-4">
            <div className="bg-white rounded-full flex justify-center items-center w-20 h-20">
                <Icon icon="ic:outline-work" width={44} height={46} className="text-[#3B71FC]"/>
            </div>
            <div className="font-extrabold">
                <p>SAMPLES</p>
                <p>OF WORK</p>
            </div>
            <p className="font-semibold">Duis aute irure dolor in repreh​enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <a href="#" className="font-extrabold hover:text-[#adbdfe]">MORE</a>
        </div>
        <div className="bg-[#edeff5] flex flex-col justify-center items-center p-5 gap-5 text-black transition-transform duration-500 transform hover:-translate-y-4">
            <div className="bg-[#3B71FC] rounded-full flex justify-center items-center w-20 h-20">
                <Icon icon="material-symbols:thermometer-gain-rounded" width={44} height={46} className="text-white"/>
            </div>
            <div className="font-extrabold">
                <p>PROFFESIONAL</p>
                <p>ACHIEVEMENTS</p>
            </div>
            <p className="font-semibold">Duis aute irure dolor in repreh​enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <a href="#" className="font-extrabold hover:text-[#adbdfe]">MORE</a>
        </div>
    </section>
)}

export default Summary;