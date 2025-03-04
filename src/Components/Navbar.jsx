import React, { useEffect, useState } from "react";
import { FaBars, FaX, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logonbg.png";
import HeroImg from "../assets/hero.jpeg";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const location = useLocation();

  // Whenever the location changes, close the side menu.
  useEffect(() => {
    setSideMenu(false);
  }, [location]);

  return (
    <div className="md:px-[2em]">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6">
        
        {/* Div 1: Logo */}
        <div className="hidden md:flex md:w-1/5 justify-center items-end">
          <img
            src={logo}
            alt="logo"
            className="max-h-16 h-full pl-6 cursor-pointer hover:opacity-90"
          />
        </div>

        {/* Div 2: Navigation Links */}
        <div className="hidden md:flex md:w-3/5 sm:py-5 hover:py-4.5 bg-primaryyellow sm:px-24">
          <ul className="flex justify-center items-center gap-4 lg:gap-8 text-white">
            <li className="hover:cursor-pointer hover:border-b-2 transition-all opacity-95 hover:text-gray-200">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:cursor-pointer hover:border-b-2 transition-all opacity-95 hover:text-gray-200">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:cursor-pointer hover:border-b-2 transition-all opacity-95 hover:text-gray-200">
              <Link to="/gettingstarted">GET STARTED</Link>
            </li>
            <li className="hover:cursor-pointer hover:border-b-2 transition-all opacity-95 hover:text-gray-200">
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>
        </div>

        {/* Div 3: Contact Button */}
        <div className="hidden md:flex md:w-1/5 justify-center items-center">
          <button className="hover:bg-green-600 hover:border-b-white hover:text-white hover:opacity-95 bg-white py-4 px-8 cursor-pointer transition-all text-gray-800">
            <Link to="/contact" className="w-fit border-b-2 border-primaryyellow hover:border-white text-xl">
              CONTACT US
            </Link>
          </button>
        </div>
        
      </div>

      {/* Side Menu for Small Screens */}
      {sideMenu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-green-500 text-white z-50 flex flex-col justify-center items-center">
          <button
            onClick={() => setSideMenu(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FaX size={30} />
          </button>
          <img src={logo2} alt="logo" className="w-16 h-16 p-2" />
          <ul className="text-2xl space-y-6 text-center">
            <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
              <Link to="/gettingstarted">GET STARTED</Link>
            </li>
            <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>
        
        </div>
      )}

      {/* Hamburger Button and Contact Button for Small Screens */}
      <div className="flex sm:hidden w-full">
        {/* Hamburger Button */}
        <div className="w-1/2 flex items-center justify-start bg-primaryyellow">
          <button onClick={() => setSideMenu(true)} className="flex items-center text-white">
            <HiMiniBars3BottomLeft size={35} className="font-semibold p-1 hover:cursor-pointer" />
          </button>
        </div>
        
        {/* Contact Button */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <button className="hover:bg-primaryyellow hover:border-b-white hover:text-white hover:opacity-95 bg-white py-4 px-8 cursor-pointer transition-all text-gray-800">
            <Link to="/contact" className="w-fit border-b-2 border-primaryyellow hover:border-white md:text-xl">
              CONTACT US
            </Link>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
