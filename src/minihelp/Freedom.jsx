import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Freedom = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Freedom To Thought & Lifestyle
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Freedom of thought and lifestyle refers to the fundamental right and
            ability of individuals to think freely, form their own opinions, and
            live according to their personal choices, values, and beliefs,
            without external pressure or coercion.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why is Role Model Important?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  Personal Empowerment:
                </b>
                Freedom of thought and lifestyle empowers individuals to explore
                their full potential, choose their path in life, and express
                their uniqueness.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  {" "}
                  Diversity and Innovation:
                </b>
                When people are free to think independently and live as they
                wish, it fosters creativity, innovation, and diverse
                perspectives, which can drive societal progress.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Mental and Emotional Well-being:
                </b>{" "}
                Living authentically according to one’s values and beliefs leads
                to greater satisfaction, happiness, and fulfillment. It also
                reduces stress and anxiety caused by conformity or external
                expectations.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Social Harmony:
                </b>
                By respecting freedom of thought and lifestyle, societies become
                more inclusive and accepting of differences, promoting peaceful
                coexistence among diverse groups.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className="ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Encourage Open Dialogue</li>

              <li>Respect Individuality</li>
              <li>Foster Self-Awareness</li>
              <li>Challenge Societal Norms</li>
              <li>Support Education and Critical Thinking</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" text-text font-text ml-3 md:text-base list-disc list-inside d text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Enhanced Personal Growth:
              </b>
              People are more likely to reach their full potential when they can
              think freely and live authentically
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Increased Creativity and Innovation:
              </b>
              A society that values freedom of thought and lifestyle benefits
              from diverse ideas and innovative solutions to problems.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Mental and Emotional Well-being:
              </b>
              Individuals who can express themselves and live according to their
              beliefs experience higher levels of happiness and satisfaction.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Respect for Diversity:
              </b>
              Promoting freedom of thought and lifestyle fosters a culture of
              inclusion, where different viewpoints and ways of life are
              respected.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Stronger Communities:
              </b>
              Societies that value freedom tend to be more harmonious, as people
              feel empowered to contribute positively without fear of
              discrimination or persecution.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Freedom;
