import React from "react";
import { Link } from "react-router-dom";
import FaqPage from "../info/faq";

const FAQ = () => {
  return (
    <div className="">
      <div className="">
        <div className="" data-aos="fade-up">
          <h1 className="font-primary text-5xl px-10 mt-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            FAQs
          </h1>
          <p className="text-center mt-5 font-second px-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            earum.
          </p>
        </div>
        <div className="max-w-5xl px-5 mt-16 mx-auto">
          <div className="">
            {FaqPage.map((item, index) => {
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
          <div className="flex items-end justify-end">
            <button className="bg-second hover:text-second text-white hover:bg-white border-second border-2 px-9 py-2 rounded-full duration-150 ">
              <Link to="/faqpage">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
