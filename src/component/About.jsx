import React from "react";
import img from "../assets/About-img.jpg";
import img2 from "../assets/About-img2.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="">
      <div className="md:max-w-7xl mx-auto mb-20 ">
        <div className="" data-aos="fade-up">
          <h1 className="font-primary text-4xl py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Our Mission
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row items-center  "
          data-aos="fade-up"
        >
          <div className="">
            <img src={img} alt="" className="" />
          </div>
          <div className="px-5 w-5/6">
            <p className="font-primary mb-5 sm:text-xl">
              To empower Gen Z and broader communities with educational content,
              interactive programs, and outreach initiatives that promote mental
              health, personal growth, and equality.
            </p>
            <button className="bg-second hover:text-second text-white hover:bg-white border-second border-2 px-9 py-2 rounded-full duration-150 ">
              <Link to="/aboutpage">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <div className="">
          <img src={img2} alt="" className="w-full" />
        </div>
        <div className="absolute 2xl:mt-48 top-0 md:w-3/4 text-white px-5 sm:mt-10 mt-3 ">
          <h1 className="md:text-4xl mb-1 text-sm font-bold sm:text-2xl lg:text-5xl">
            Medium length hero headline goes here
          </h1>
          <p className="text-xs md:mt-6  sm:text-xl lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            adipisci voluptatum iusto iste qui rerum eaque dolor quibusdam, quos
            cumque cum ipsam labore illum molestias molestiae eveniet deleniti
            quas non!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
