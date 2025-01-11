import React from "react";
import Navbar from "./Navbar";
import img from "../assets/About-img.jpg";
import Teacher from "../assets/teacher.jpg";
import Ksosin from "../assets/koosin.jpg";
import Nember from "../info/nember";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
const Boss = [
  {
    img: Teacher,
    name: "Ing Vanni",
    position: "Advisor | Mentor | Coach",
    qoute: "Winners Never Quit & Quitters Never Win- Vince Lombardi",
    FB: "https://www.facebook.com/ingvanni",
    Tlg: "https://t.me/IngVanni",
    LI: "https://www.linkedin.com/in/ingvanni/",
  },
  {
    img: Ksosin,
    name: "Choeurn Kosin",
    position: "Project Manager",
    qoute: "I support you, do what ever you want that make you happy",
    FB: "https://www.facebook.com/choeurn.kosin/",
    Tlg: "https://t.me/CHOEURN_Kosin",
    LI: "https://www.linkedin.com/in/choeurn-kosin/",
  },
];
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="mt-10"></div>
      <div className="md:max-w-7xl mx-auto mb-20 " data-aos="fade-up">
        <div className="">
          <h1 className="font-primary text-4xl py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Our Mission
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center  ">
          <div className="">
            <img src={img} alt="" className="" />
          </div>
          <div className="px-5 w-5/6">
            <p className="font-primary mb-5 sm:text-xl">
              To empower Gen Z and broader communities with educational content,
              interactive programs, and outreach initiatives that promote mental
              health, personal growth, and equality.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="text-center px-2 mb-20" data-aos="fade-up">
            <h1 className="font-primary font-bold text-xl sm:text-3xl md:text-4xl">
              The People Behind Our Mission
            </h1>
            <p className="font-second text-xs mt-2 sm:text-sm">
              Dedicated Professionals Committed to mental health support.
            </p>
          </div>
          <div className="bg-bg p-10 mt-10">
            <div className="max-w-2xl mx-auto grid grid-row gap-4 sm:grid-cols-2 ">
              {Boss.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid mx-auto  "
                    data-aos="fade-up"
                  >
                    <div className="bg-white sm:w-5/6 mx-auto sm:py-10 sm:px-3 px-5 py-10 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <img
                            src={item.img}
                            className="w-40 h-40 rounded-full"
                            alt=""
                          />
                        </div>
                        <h1 className="sm:text-3xl text-2xl font-primary mt-2 font-bold">
                          {item.name}
                        </h1>
                        <p className="font-second mb-2">{item.position}</p>
                        <p className="font-second text-xs mb-2">{item.qoute}</p>
                        <div className="flex items-center  justify-center gap-2 ">
                          <Link to={item.FB}>
                            <FaFacebookF className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                          <Link to={item.Tlg}>
                            <FaTelegramPlane className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                          <Link to={item.LI}>
                            <FaLinkedinIn className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-5xl mx-auto grid grid-row mt-20 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {Nember.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid mx-auto  "
                    data-aos="fade-up"
                  >
                    <div className="bg-white sm:w-5/6 mx-auto sm:py-10 sm:px-3 px-5 py-10 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <img
                            src={item.img}
                            className="w-40 h-40 rounded-full"
                            alt=""
                          />
                        </div>
                        <h1 className="sm:text-3xl text-2xl font-primary mt-2 font-bold">
                          {item.name}
                        </h1>
                        <p className="font-second mb-2">{item.position}</p>
                        <p className="font-second text-xs mb-2">{item.qoute}</p>
                        <div className="flex items-center  justify-center gap-2 ">
                          <Link to={item.FB}>
                            <FaFacebookF className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                          <Link to={item.Tlg}>
                            <FaTelegramPlane className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                          <Link to={item.LI}>
                            <FaLinkedinIn className="bg-second p-1 rounded-full text-2xl text-white hover:bg-white hover:text-second transition-all duration-150" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
