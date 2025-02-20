import React from "react";
import {
  FaEnvelope,
  FaHandPointLeft,
  FaHandPointRight,
  FaHome,
  FaPhone,
  FaPhoneSquare,
  FaQuestion,
  FaRegClock,
  FaTelegramPlane,
  FaTools,
} from "react-icons/fa";
import { FaCalendarXmark, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logonbg.png";

function Footer() {
  return (
    <div className=" bg-primaryyellow text-white pt-10">
      <div className="lg:flex justify-between  w-[80%] mx-auto pb-6">
      <div className="flex">
      <a href="/">
        <img src={logo} alt="log" />
      </a>
    </div>
        {/* Section 1 */}
        <div>
         

          <div className="lg:text-[16px] text-[14px]   ">
            <h2 className="text-xl  font-bold border-b border-gray-300 mb-2">
              Contact Us
            </h2>

            <p className="flex gap-1 items-center font-medium cursor-pointer py-1  duration-300 ease-in-out">
              {" "}
              <FaPhone className="size-4 rotate-90  hover:text-gray-600 duration-300 ease-in-out" />
              <a href="tel:+1 (612) 448-5501">+1 (612) 448-5501</a>
            </p>

            <p className="flex gap-1 items-center font-medium cursor-pointer py-1  duration-300 ease-in-out">
              {" "}
              <FaPhone className="size-4 rotate-90 hover:text-gray-600 duration-300 ease-in-out" />
              <a href="tel:+1 (763) 221-2319">+1 (763) 221-2319</a>
            </p>

            <p className="flex gap-1 align-middle items-center font-medium cursor-pointer py-2  duration-300 ease-in-out">
              {" "}
              <FaEnvelope className=" size-4 hover:text-gray-600 duration-300 ease-in-out" />
              <a
                href="mailto:naturecareservicesllc@gmail.com "
                className="pl-2"
              >
                naturecareservicesllc@gmail.com
              </a>
            </p>

            <p className="flex gap-1 align-middle items-center font-medium cursor-pointer py-2  duration-300 ease-in-out">
              {" "}
              <FaLocationDot className=" size-4 hover:text-gray-600 duration-300 ease-in-out" />{" "}
              17445 Halifax path Lakeville, MN 55044
            </p>
          </div>
        </div>

        {/* Section 2 / Column 2 */}
        <div className=" lg:px-4  mt-2">
        

          <div className="lg:text-[16px] text-[15px] text-left">
            <h2 className="text-xl  font-bold border-b border-gray-300 mb-2">
              Hours of Operation
            </h2>
            <p className=" font-medium ">
              Week Days : 8:00 A.M - 5:00 P.M
            </p>
            <p className="flex gap-2 font-medium ">
              Weekends : Closed{" "}
              <FaCalendarXmark className="size-5 " />
            </p>
          </div>
        </div>

        {/* Section 3 / Column 3 */}
        <div className=" ">
          <div className="text-[18px] pt-4">
            <h2 className="text-xl  font-bold border-b border-gray-300 mb-2">
              Quick Links
            </h2>

            {/* Links */}
            <ul className="text-start font-medium ">
              <li className="flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out">
                <FaHome className="" />
                <Link to="/">Home</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out">
                <FaQuestion className="" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out">
                <FaHandPointRight className="" />
                <Link to="/gettingstarted">Get Started</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out">
                <FaTools className="" />
                <Link to="/services">Services</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out">
                <FaTelegramPlane className="" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-6 lg:text-md text-center font-medium  border-t-[2px] text-gray-100 lg:w-[70%] w-[90%] mx-auto">
        <p>
          {" "}
          &copy; 2025 Nature Care Services - All Rights Reserved | Designed by
          YOUVILAB | Powered by YOUVILAB
        </p>
      </div>
    </div>
  );
}

export default Footer;
