import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import { Link } from "react-router-dom";
const sectionhlep = [
  {
    imgs: Img1,
    title: "Positive Support",
    info: "Building a network that encourages mutual support and growth.",
    link: "/helpage/positive",
  },
  {
    imgs: Img2,
    title: "Growth Mindset",
    info: "Instilling resilience and a commitment to continuous learning.",
    link: "/helpage/growth",
  },
  {
    imgs: Img3,
    title: "Communication Skills",
    info: "Improving self-expression and active listening.",
    link: "/helpage/communication",
  },
  {
    imgs: Img4,
    title: "Equality",
    info: "Advocating for gender, cultural, and social equality.",
    link: "/helpage/equality",
  },
  {
    imgs: Img5,
    title: "Emotional Intelligence",
    info: "Teaching empathy and  Happiness, excitement, love gratitude, contentment.",
    link: "/helpage/emotional",
  },
  {
    imgs: Img6,
    title: "Freedom and Lifestyle",
    info: "Promoting diverse thinking and responsible living.",
    link: "/helpage/freedom",
  },
];

const Help = () => {
  return (
    <section id="Help" className="bg-bg mt-10">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center w-5/6 md:w-1/2 mx-auto" data-aos="fade-up">
          <h1 className="text-2xl sm:text-4xl font-primary font-semibold">
            What Can We Do Together
          </h1>
          <p className="mt-4 font-second font-light text-sm ">
            At ReGeZ, we collaborate to organize events, share expertise, create
            resources, and advocate for mental well-being, personal growth, and
            equality.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 px-10 gap-10 py-20">
          {sectionhlep.map((item, index) => {
            return (
              <div
                className="bg-white p-5 font-primary rounded-lg"
                data-aos="fade-up"
                key={index}
              >
                <div className="">
                  <img src={item.imgs} alt="" className="w-16 h-16" />

                  <h1 className="text-xl font-semibold py-2">{item.title}</h1>

                  <p>{item.info}</p>
                </div>
                <div className=" flex items-center gap-2 mt-3">
                  <div className="hover:text-second duration-150">
                    <Link to={item.link}>Learn More</Link>
                  </div>
                  <div className="#">
                    <Link to={item.link}>
                      <MdArrowForward className="text-second" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 flex items-end justify-end -mt-4 ">
          <button className="bg-second text-white px-10 py-2 rounded-full hover:bg-white hover:text-second duration-150">
            <Link to="/helppage">All program</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
