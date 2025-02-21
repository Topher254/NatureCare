import React, { useEffect, useState } from "react";
import { FaBars, FaX, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logon.jpg";
import logo2 from "../assets/logonbg.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const location = useLocation();

  // Whenever the location changes, close the side menu.
  useEffect(() => {
    setSideMenu(false);
  }, [location]);

  return (
    <div>

      {/* Hero Section */}
      <div className=''>
        <img src={HeroImg} alt="Hero Image" className='w-full lg:h-[780px] h-[800px] object-cover object-top blur-[1px]' />

        {/* Navbar section */}
        <div className='lg:flex lg:justify-between lg:space-x-40 lg:px-20 mx-auto lg:py-10 top-0 left-0 right-0 absolute'>

          {/* Logo image div */}
          <div className='size-36 w-[100%]'>
              <a href="/">
                <h2 className='text-2xl font-bold text-yellow-600 bg-amber-100 px-4 lg:py-2 py-[40px] lg:w-[200px] hover:text-yellow-700 duration-300 ease-in-out text-center'>Nature Care <br /> Services</h2>
              </a>
          </div>

      {/* Navbar overlay ...this first div has a marging/padding,not sure*/}
      <div className="">
        <div className="flex sm:justify-center sm:items-center w-full">
          <div className="w-1/5 hidden md:flex justify-center items-end">
            <img
              src={logo}
              alt="logio"
              className="max-h-16 h-full pl-6 cursor-pointer hover:opacity-90"
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full z-10 sm:relative">
              {/* Small screen hamburger */}
              <div className="flex pl-2 items-center text-white sm:hidden bg-primaryyellow w-1/2">
                <button onClick={() => setSideMenu(true)}>
                  <HiMiniBars3BottomLeft size={35} className="font-semibold p-1 hover:cursor-pointer" />
                </button>
              </div>

              {/* Side menu for small screens */}
              {sideMenu && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 text-white z-50 flex flex-col justify-center items-center">
                  <button
                    onClick={() => setSideMenu(false)}
                    className="absolute top-6 right-6 text-white"
                  >
                    <FaX size={30} />
                  </button>
                  <img src={logo2} alt="logo" className="w-16 h-16 p-2" />
                  <ul className="text-2xl space-y-6 text-center">
                    <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                      <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                      <Link to="/gettingstarted">GET STARTED</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                      <Link to="/services">SERVICES</Link>
                    </li>
                  </ul>
                  <div className="flex gap-4 mt-6">
                    <a href="">
                      <FaPhone
                        size={22}
                        className="hover:opacity-90  hover:scale-105 transition-all cursor-pointer text-white "
                      />
                    </a>
                    <a href="">
                      <FaInstagram
                        size={25}
                        className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white"
                      />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp
                        size={25}
                        className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white"
                      />
                    </a>
                    <a href="">
                      <FaTiktok
                        size={20}
                        className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white"
                      />
                    </a>
                  </div>
                </div>
              )}

              {/* Large Screen Navigation */}
              <div className="hidden md:flex sm:py-2  bg-primaryyellow sm:px-14 w-3/5">
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

              {/* Contact Us Button */}
              <div className="bg-white flex justify-center items-center w-1/2 md:w-full  sm:w-fit">
                <button className="font-semibold hover:bg-green-400 hover:border-b-white hover:text-white hover:opacity-95 bg-white py-4 px-8 cursor-pointer transition-all text-gray-800">
                  <Link to="/contact" className="w-fit border-b-2 border-primaryyellow">
                    CONTACT US
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
