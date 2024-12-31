import React from "react";
import Navbar from "./Navbar";
import Faq from "../assets/faq.jpg";
import FAQ from "./FAQ";
import FaqPages from "../info/faqpage";
import Footer from "./Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FaqPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      {/* <div className="relative">
        <div className="mt-28">
          <img src={Faq} alt="" className="w-full " />
        </div>
        <div className="absolute top-0 ml-9 mt-2">
          <h1 className="text-white font-semibold font-second text-xl w-1/2 sm:text-3xl sm:w-3/4 sm:mt-14 md:text-4xl xl:mt-40">
            Everything You Need to know
          </h1>
        </div>
      </div> */}
      <div className="">
        <div className="" data-aos="fade-up">
          <h1 className="font-primary text-5xl mt-24 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            FAQs
          </h1>
          <p className="text-center mt-5 font-second px-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            earum.
          </p>
        </div>
      </div>
      <div className="max-w-5xl px-5 mt-16 mx-auto">
        {FaqPages.map((item, index) => {
          return (
            <div className="" data-aos="fade-up" key={index}>
              <div className="w-full h-0.5 bg-slate-600"></div>
              <div className="">
                <h1 className="font-bold mt-4 font-primary text-xl sm:text-2xl">
                  {item.Question}
                </h1>
                <p className="font-second py-7 text-xs sm:text-sm">
                  {item.Answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="mt-10" />
      <Footer />
    </div>
  );
};

export default FaqPage;
