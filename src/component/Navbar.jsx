import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Home from "./Home";
import Help from "./Help";
import { Link } from "react-router-dom";
import Logo from "../assets/logo11.png";
import App from "../App";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const onclickk = () => {
    setopen(!open);
  };

  return (
    <div className="fixed top-0 left-0 right-0 shadow-md z-10">
      <section id="Navbar" className="relative">
        <nav className=" py-2 px-5  bg-white ">
          <div className="flex md:flex-row flex-col md:items-center justify-between max-w-7xl mx-auto  ">
            <div className="font-primary text-4xl text-primary ">
              <Link to="/">
                <img src={Logo} alt="" className="w-40" />
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex flex-col md:flex-row md:gap-12 font-second">
                <li className="hover:text-second">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/helppage">Help</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/aboutpage">About</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/faqpage">FAQ</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/contactpage">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="md:hidden flex items-center absolute right-0 py-2 px-2">
              <button
                onClick={onclickk}
                className="text-gray-700 hover:font-primary"
              >
                {open ? (
                  <MdOutlineClose className="size-7 text-primary " />
                ) : (
                  <HiOutlineMenu className="size-7 text-primary" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {open && (
          <div className="md:hidden ">
            <div className=" bg-white  ">
              <ul className="flex flex-col md:flex-row md:gap-12 gap-2 py-2 -mt-1 font-second px-5 ">
                <li className="hover:text-second">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/helppage">Help</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/aboutpage">About</Link>
                </li>
                <li className="hover:text-second">
                  <Link to="/faqpage">FAQ</Link>
                </li>
                <li className="hover:text-second ">
                  <Link to="/contactpage">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
