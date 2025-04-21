import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Communication = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Communication Skill{" "}
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Communication skills refer to the ability to effectively convey
            information, ideas, and emotions to others through verbal,
            non-verbal, and written forms.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why it Matter?
          </h1>
          <div className="">
            <p className="text-text font-text mb-5 text-sm md:text-xl">
              Good communication skills are essential for success in almost
              every aspect of life. Whether in personal relationships,
              professional environments, or social interactions, effective
              communication fosters understanding, reduces conflicts, and builds
              stronger connections.
            </p>
            <ul className=" ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li>Allows individuals to express their thoughts clearly</li>
              <li>Collaborate better</li>
              <li>Solve problems more efficient</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className=" ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Practice Active Listening</li>
              <li> Be Clear and Concise</li>

              <li>Seek feedback</li>
              <li> Enhance Public Speaking</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" ml-3 md:text-base list-disc list-inside font-text text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Better Relationships:
              </b>
              Effective communication fosters trust and deeper connections in
              both personal and professional relationships.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Conflict Resolution:
              </b>
              Strong communicators are better at resolving misunderstandings and
              addressing issues before they escalate.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Enhanced Teamwork:
              </b>
              Clear and open communication enables better collaboration and
              productivity in group settings.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Career Advancement:
              </b>
              Good communicators often perform well in leadership roles, making
              them more likely to advance in their careers.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Boosted Confidence:
              </b>
              Being able to express yourself clearly enhances self-assurance in
              both social and professional settings.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Communication;
