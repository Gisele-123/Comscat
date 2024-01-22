import React from "react";
import us from "../Assets/whatWeDo.jpg"
import { Icon } from "@iconify-icon/react";
import creative from "../Assets/design thinking.png"

const About=()=>{
    return (
    <section id="about">
    <div className="bg-[#3B71FC]">
        <div className="flex justify-between items-center p-14 gap-28 text-white">
            <div className="flex flex-col gap-7 md:w-[50%] w-full">
                <p className="font-extrabold text-4xl">ABOUT US</p>
                <p>
                    Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu 
                    dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis
                    tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna
                    fringilla urna porttitor rhoncus. Ultricies leo integer malesuada
                    nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. 
                    Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit.
                </p>
                <button className="bg-white text-[#3B71FC] p-5 rounded-md w-48 text-semibold hover:bg-[#d1dcfa]">LEARN MORE</button>
                <div className="font-extrabold text-4xl">
                    <p>Creative</p>
                    <p>Design Thinking</p>
                </div>
                <p>
                Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui
                vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique
                sollicitudin
                </p>
            </div>
            <div className="md:flex hidden flex-col">
                <img src={us} alt="" className="w-96 h-96 rounded-full z-10" />
                <div className="bg-orange-600 w-80 h-80 rounded-full absolute right-4 z-0"></div>
            </div>
        </div>
        <div className="md:flex hidden justify-between w-[50%] gap-10 absolute right-10 top-[205%]">
            <div className="bg-[#D9D9D9] flex flex-col p-10 w-[50%] transition-transform duration-500 transform hover:-translate-y-4">
                <Icon icon="icons8:idea" width={51} height={55}/>
                <p>
                    Quick can manor smart money hopes worth too. 
                    Comfort produce husband boy her had hearing. 
                    Law others theirs passed but wishes. 
                    You day real less till dear read.
                </p>
            </div>
            <div className="w-[50%] bg-[#D9D9D9] flex flex-col p-10 transition-transform duration-500 transform hover:-translate-y-4">
                <Icon icon="icons8:idea" width={51} height={55}/>
                <img src={creative} alt="" />
            </div>
        </div>
    </div>
    </section>
)}

export default About;