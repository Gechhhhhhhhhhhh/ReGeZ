import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Postive = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Positive Support
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Positive support refers to a set of research-based strategies used
            to increase quality of life and decrease problem behavior by
            teaching new skills and making changes in a person's environment.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why it Matter?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  Boosts Confidence:
                </b>
                Positive encouragement helps build self-esteem, making people
                more confident in their abilities to face challenges.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  {" "}
                  Increases Motivation:
                </b>
                When people feel supported, they are more likely to stay
                motivated and keep pushing towards their goals, even in the face
                of adversity
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Improves Mental Health:
                </b>{" "}
                Support from friends, family, or colleagues can reduce stress,
                anxiety, and feelings of isolation. Knowing that someone
                believes in you can have a huge impact on mental health
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Creates a Positive Environment:
                </b>
                In teams or communities, positive reinforcement fosters
                cooperation, trust, and better communication, leading to a more
                productive and happier environment.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className="ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Active Listening</li>
              <li>Provide Constructive Feedback</li>
              <li>Be Available and Reliable</li>
              <li>Celebrate Achievements Together</li>
              <li>Foster a Positive Environment</li>
              <li>Embrace Diversity</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" text-text font-text ml-3 md:text-base list-disc list-inside d text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Enhanced Self-Esteem:
              </b>
              Positive reinforcement boosts confidence and helps individuals
              believe in their abilities.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Increased Motivation:
              </b>
              Supportive environments encourage people to stay motivated and
              persist in pursuing their goals.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Better Mental Health:
              </b>
              Positive support reduces stress, anxiety, and feelings of
              loneliness, contributing to overall emotional well-being.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Higher Productivity:
              </b>
              People who feel supported are more focused and productive, often
              achieving better outcomes in their personal and professional
              lives.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Improved Problem-Solving Skills:
              </b>
              With a supportive environment, individuals feel more comfortable
              taking risks and finding creative solutions.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Resilience in the Face of Challenges:
              </b>
              Positive support helps individuals recover from setbacks more
              quickly, fostering a growth mindset.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Postive;
