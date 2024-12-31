import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Wamth = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Warmth & Structure
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Warmth and structure are two essential elements in becoming a
            positive role model. Warmth: This involves empathy, approachability,
            and emotional support. A role model with warmth creates an
            environment where others feel valued, understood, and motivated to
            grow. It builds trust and allows others to connect on a deeper
            level.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why is Role Model Important?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  nspires Positive Behavior:
                </b>
                Role models exemplify positive habits and behaviors. By
                demonstrating kindness, hard work, resilience, or leadership,
                they inspire others to adopt similar traits.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Provides Guidance:
                </b>
                A role model serves as a guide, showing others how to navigate
                challenges and make sound decisions. They offer valuable life
                lessons, showing what works and what doesn’t.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Positive Behavioral Influence:
                </b>{" "}
                By observing how role models handle challenges and adversity,
                Gen Z learns how to approach difficulties with resilience and a
                growth mindset.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Builds Confidence and Motivation:
                </b>
                Seeing someone achieve success through determination and skill
                can inspire others to believe in their potential.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className=" ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Live with Integrity</li>
              <li>Stay Humble and Approachable</li>

              <li> Keep Learning and Improving</li>
              <li> Be Supportive</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" ml-3 md:text-base list-disc list-inside font-text text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Personal Growth:
              </b>
              Being a role model forces you to continuously improve. As others
              look to you for guidance, you become more mindful of your
              behavior, habits, and decisions, which drives personal
              development.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Sense of Fulfillment:
              </b>
              Helping others achieve their potential provides a deep sense of
              satisfaction. Knowing you’re positively impacting someone’s life
              is rewarding and fulfilling.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Legacy Building:
              </b>
              A role model leaves a lasting legacy. Your influence on others can
              shape generations to come as the people you inspire pass on those
              values and skills to others.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Stronger Relationships:
              </b>
              Role models form strong, meaningful relationships built on trust
              and respect. These relationships can have both personal and
              professional benefits.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Wamth;
