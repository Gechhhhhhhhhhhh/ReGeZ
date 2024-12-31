import React from "react";
import Navbar from "./Navbar";
import { MdArrowForward } from "react-icons/md";
import Footer from "./Footer";
import HelpList from "../info/hleppage";
import { Link, Outlet } from "react-router-dom";
import Postive from "../minihelp/Postive";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HelpPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mb-28"></div>
      <div className="">
        <div className="text-center md:w-1/2 mx-auto px-5" data-aos="fade-up">
          <h1 className="text-4xl font-primary font-semibold">
            What Can We Do Together
          </h1>
          <p className="mt-4 font-second font-light text-sm ">
            At ReGeZ, we collaborate to organize events, share expertise, create
            resources, and advocate for mental well-being, personal growth, and
            equality.
          </p>
        </div>
        <div className="bg-bg">
          <div className="md:max-w-7xl mx-auto bg-bg mt-20">
            <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 px-5 gap-10 py-20">
              {HelpList.map((item, index) => {
                return (
                  <div
                    className="bg-white p-5 font-primary rounded-lg"
                    data-aos="fade-up"
                    key={index}
                  >
                    <div className="">
                      <img src={item.img} alt="" className="w-16 h-16" />

                      <h1 className="text-xl font-semibold py-2">
                        {item.title}
                      </h1>

                      <p>{item.info}</p>
                    </div>
                    <div className=" flex items-center gap-2 mt-3 ">
                      <div className="hover:text-second">
                        <Link to={item.link}>Learn More</Link>
                      </div>
                      <div className="">
                        <Link to={item.link}>
                          <MdArrowForward className="text-second" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-22"></div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default HelpPage;
