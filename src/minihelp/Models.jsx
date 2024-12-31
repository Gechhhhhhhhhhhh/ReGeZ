import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Models = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Role Model Gen Z
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            A role model for Gen Z is someone who inspires and influences young
            individuals through their actions, values, and behaviors.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why is Role Model Important?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  Inspiration and Motivation:
                </b>
                Role models provide a vision of success, motivating young people
                to set ambitious goals and work hard to achieve them.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Guidance on Values and Ethics:
                </b>
                Through their actions, role models can shape the ethical and
                moral compass of Gen Z, promoting values such as integrity,
                empathy, and responsibility.
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
                  Encouragement to Take Action:
                </b>
                : Gen Z is known for its passion for activism. Role models who
                champion social causes inspire young people to get involved and
                create change in their communities.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className=" ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Communicate Openly and Honestly</li>
              <li> Live Authentically</li>

              <li> Be Approachable and Relatable</li>
              <li> Mentor and Encourage Growth</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" ml-3 md:text-base list-disc list-inside font-text text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Impactful Influence:
              </b>
              You'll have a positive effect on shaping the next generation’s
              values, behaviors, and aspirations.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Fostering Innovation and Creativity:
              </b>
              By inspiring Gen Z, you encourage them to think creatively and
              take innovative approaches to problem-solving.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Creating a Legacy of Positive Change:
              </b>
              Being a role model allows you to contribute to societal progress
              by influencing the next generation to act on social issues like
              sustainability, equality, and justice.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Strengthening Communities:
              </b>
              As you inspire young people to be active participants in their
              communities, you help build stronger, more cohesive societies.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Personal Growth and Reflection:
              </b>
              Promoting equality helps reduce bias, prejudice, and
              discriminatory practices that harm individuals and society.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Enhanced Education:
              </b>
              Equality in education ensures that everyone has access to the same
              quality of learning, leading to better outcomes for individuals
              and society.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Models;
