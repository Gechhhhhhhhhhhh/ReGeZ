import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Growth = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Growth Mindset
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            A growth mindset is the belief that abilities, intelligence, and
            talents can be developed over time through hard work, learning, and
            perseverance.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why it Matter?
          </h1>
          <div className="">
            <ul className=" ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text  text-base md:text-xl mr-2">
                  Embrace challenges:
                </b>
                instead of avoiding them, leading to greater learning and skill
                development.
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
                  Persevere in the face of setbacks:
                </b>{" "}
                viewing failure as a stepping stone to success rather than a
                reflection of their inherent abilities.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Seek out feedback:
                </b>
                As a way to improve, rather than seeing criticism as a threat to
                their self-esteem.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Adapt to change:
                </b>
                Learn new skills, making them more resilient in personal and
                professional settings. By adopting a growth mindset, individuals
                can unlock their potential, continually develop their skills,
                and approach life with a sense of curiosity and optimism.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className=" ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Embrace challenges</li>
              <li>Learn from failures</li>
              <li> Focus on effort, not just results</li>
              <li>Seek feedback</li>
              <li>Surround yourself with growth-minded individuals</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" ml-3 md:text-base list-disc list-inside font-text text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Increased resilience:
              </b>
              A growth mindset helps individuals bounce back from failures and
              view challenges as opportunities for learning and growth.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Enhanced problem-solving:
              </b>
              People with a growth mindset are more open to experimenting with
              new solutions and approaches, which improves creativity and
              adaptability.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Greater success in learning:
              </b>
              By valuing effort and persistence, individuals with a growth
              mindset are more likely to excel academically and professionally.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Improved mental health:
              </b>
              People who feel supported are more focused and productive, often
              achieving better outcomes in their personal and professional
              lives.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Stronger relationships:
              </b>
              A growth mindset fosters open communication and learning from
              others, strengthening personal and professional relationships.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Fulfillment and personal satisfaction:
              </b>
              A growth mindset leads to continuous personal development,
              providing a sense of achievement and purpose over time.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Growth;
