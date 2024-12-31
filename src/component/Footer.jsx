import React from "react";
import Logo from "../assets/logo11.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-10 gap-3 grid grid-row p-5 sm:grid-cols-2  lg:grid-cols-4 sm:gap-x-28">
        <div className="">
          <h1 className="text-4xl">
            <img src={Logo} alt="" className="w-56" />
          </h1>
        </div>
        <div className="">
          <h1 className="font-semibold text-2xl font-primary">Resources</h1>
          <div className="text-base">
            <p className="hover:translate-x-2 duration-150 hover:text-second mt-3">
              <Link to="/aboutpage">About Us</Link>
            </p>
            <p className="hover:translate-x-2 duration-150 hover:text-second ">
              <Link to="/helppage">Help</Link>
            </p>
            <p className="hover:translate-x-2 duration-150 hover:text-second ">
              <Link to="/faqpage">FAQ</Link>
            </p>
            <p className="hover:translate-x-2 duration-150 hover:text-second ">
              <Link to="/contactpage">Contact</Link>
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold text-2xl font-primary">Contact</h1>
          <div className="text-base ">
            <p className="mt-3">Phone: (+855)71 776 0209</p>
            <p>Email:regenerative.genz@gmail.com</p>
            <p>Address: Online community</p>
          </div>
        </div>
        <div className="lg:ml-16">
          <h1 className="font-semibold text-2xl font-primary ">Follow Us On</h1>
          <div className="flex space-x-2 mt-3">
            <Link to="https://www.facebook.com/share/19Sj1x9Q89/?mibextid=LQQJ4d">
              <FaFacebookF className="bg-second p-1 rounded-full md:text-2xl text-xl text-white hover:bg-white hover:text-second transition-all duration-150" />
            </Link>
            <Link to="http://linkedin.com/in/regez-regenerative-genz-5b2592342">
              <FaLinkedinIn className="bg-second p-1 md:text-2xl rounded-full text-xl text-white  hover:bg-white hover:text-second transition-all duration-150" />
            </Link>
            <Link to="https://youtube.com/@regenerative.genz11?si=Z-yP2p6ewyW_dW_v">
              <FaYoutube className="bg-second p-1 md:text-2xl rounded-full text-xl text-white transition-all duration-150 hover:bg-white hover:text-second" />
            </Link>
            <Link to="https://www.instagram.com/regenerative.genz/profilecard/?igsh=bHpoaWFxNnFvdXFp">
              <FaInstagram className="bg-second p-1 md:text-2xl rounded-full text-xl text-white transition-all duration-150 hover:bg-white hover:text-second" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p className="font-text py-1 text-center text-xs">
        &copy;2025ReGeZ.All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
