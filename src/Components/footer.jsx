import React from "react";
import { Icon } from "@iconify-icon/react";

const Footer=()=>{
    return( 
    <section className="bg-[#191818] flex flex-col justify-center items-center p-10" id="contact">
        <div className="text-white flex md:flex-row flex-col justify-center items-center gap-5">
            <div className="flex flex-col gap-4 justify-center items-start w-[50%]">
                <p className="text-lg font-semibold md:flex hidden">Ready to talk?</p>
                <p className="text-3xl font-extrabold text-center">CONTACT US:</p>
                <p className="md:flex hidden">
                    Massa tempor nec feugiat nisl pretium fusce id velit. 
                    Accumsan tortor posuere ac ut. Aenean pharetra magna 
                    ac placerat vestibulum lectus. Praesent semper feugiat 
                    nibh sed pulvinar. Lorem sed risus ultricies tristique.
                </p>
                <div className="flex gap-6 justify-center items-center pt-3">
                    <a href="instagram.com"><div className="cursor-pointer"><Icon icon="skill-icons:instagram" width={25} height={25}/></div></a>
                    <a href="facebook.com"><div className="cursor-pointer"><Icon icon="logos:facebook" width={25} height={25}/></div></a>
                    <a href="linkedin.com"><div className="cursor-pointer"><Icon icon="devicon:linkedin" width={25} height={25}/></div></a>
                    <a href="whatsapp.com"><div className="cursor-pointer"><Icon icon="logos:whatsapp-icon" width={25} height={25}/></div></a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-[50%]">
                <input type="text" placeholder="Enter your name" className="flex p-3 w-96 rounded-md text-[#1f1f1f] focus:border-none"/>
                <input type="email" placeholder=" Enter your verified email address" className="flex p-3 w-96 rounded-md text-[#1f1f1f] focus:border-none"/>
                <textarea cols="47.5" rows="10" placeholder="Enter your message" className="flex p-3 rounded-md text-[#1f1f1f] focus:border-none"></textarea>
                <button className="flex p-3 w-96 rounded-md justify-center items-center text-white border border-white border-7">SUBMIT</button>
            </div>
        </div>
        <div className="flex pt-12 text-[#cccccc]">©️comscat 2024. All rights reserved.</div>
    </section>
    )}

export default Footer;