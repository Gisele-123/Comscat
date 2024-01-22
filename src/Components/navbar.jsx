import React from "react";
import logo from "../Assets/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="flex flex-row justify-between px-14 py-4" id="home">
      <div>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      {isMenuOpen ? null : (
        <div
          id="nav"
          className="md:flex hidden gap-16 p-12 text-[#313131] font-semibold text-xl"
        >
          <a href="#home" className="hover:text-[#1455FF]">
            Home
          </a>
          <a href="#about" className="hover:text-[#1455FF]">
            About us
          </a>
          <a href="#services" className="hover:text-[#1455FF]">
            Services
          </a>
          <a href="#products" className="hover:text-[#1455FF]">
            Products
          </a>
          <a href="#work" className="hover:text-[#1455FF]">
            Work
          </a>
          <a href="#contact" className="hover:text-[#1455FF]">
            Contact us
          </a>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div
          className="cursor-pointer hover:text-slate-700 text-end focus:text-slate-700"
          onClick={toggleMenuOpen}
        >
          <ion-icon name="menu" size="large"></ion-icon>
        </div>
        <div
          id="menu"
          className={`flex flex-col gap-2 p-9 justify-start items-start bg-[#f3f3f3] w-72 font-semibold text-lg ${
            isMenuOpen ? "fixed z-100 right-7 block" : "hidden"
          }`}
        >
          <div
          className="cursor-pointer text-slate-700 hover:text-slate-700"
          onClick={toggleMenuOpen}
        >
          <ion-icon name="menu" size="large"></ion-icon>
        </div>
          <a href="#home">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              Home
            </button>
          </a>
          <a href="#about">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              About us
            </button>
          </a>
          <a href="#services">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              Services
            </button>
          </a>
          <a href="#products">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              Products
            </button>
          </a>
          <a href="#work">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              Work
            </button>
          </a>
          <a href="#contact">
            <button
              onClick={toggleMenuOpen}
              className="hover:bg-[#e2e2e2] w-56 p-3"
            >
              Contact us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
