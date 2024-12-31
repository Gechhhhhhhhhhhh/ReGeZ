import React from "react";
import img2 from "../assets/img-Home.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="" className="">
      <div className="max-w-7xl mx-auto py-24 px-10 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-4/5 lg:w-4/6">
            <h1 className="text-4xl lg:text-5xl sm:text-4xl md:text-4xl font-second font-semibold  ">
              Welcome to
              <span className="text-primary sm:ml-2 sm:inline-block ">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: [" ReGeZ"],
                  }}
                />
              </span>
            </h1>
            <p className="mt-8 font-second font-light text-sm md:w-5/6 lg:w-4/6 ">
              A place where you can gain valuable insights into your mental
              health, navigate the complexities of personal growth, and unlock
              the full potential of your abilities to achieve your most
              ambitious goals.
            </p>
          </div>
          <div className="md:w-10/12 lg:w-1/2">
            <img src={img2} alt="" className="pt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
