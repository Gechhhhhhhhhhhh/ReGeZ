import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Fulillment = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Fulfillment
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Fulfillment is the sense of satisfaction and contentment that comes
            from achieving ones goals, realizing personal potential, and living
            in alignment with ones values and purpose. It is often associated
            with a deep sense of well-being, peace, and happiness that arises
            from living a life that feels meaningful and complete.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why is Role Model Important?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  Lead a Purposeful Life:
                </b>
                It gives us a reason to wake up every day with passion and
                drive, guiding us toward meaningful achievements.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Boost Mental and Emotional Health:
                </b>
                Achieving fulfillment can reduce feelings of anxiety, stress,
                and dissatisfaction, creating a more balanced emotional state.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Improve Relationships:
                </b>{" "}
                When we are fulfilled, we can better connect with others,
                offering love, support, and understanding without relying on
                others to “complete” us.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Encourage Growth:
                </b>
                Fulfillment fosters self-discovery and continuous growth,
                pushing us to strive for more and evolve as individuals.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className="ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Practice Gratitude</li>

              <li> Live in the Present</li>
              <li> Practice Self-Reflection</li>
              <li> Cultivate Healthy Relationships</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" text-text font-text ml-3 md:text-base list-disc list-inside d text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Increased Happiness:
              </b>
              Fulfillment brings a deep sense of joy that comes from living a
              life aligned with your passions and purpose.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Improved Mental Health:
              </b>
              A sense of fulfillment helps reduce stress, anxiety, and
              depression, promoting overall mental well-being.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Stronger Resilience:
              </b>
              Fulfilled individuals are better equipped to handle challenges and
              setbacks because they are grounded in their purpose and values.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Greater Motivation:
              </b>
              When people feel fulfilled, they are more driven and focused,
              pushing themselves to achieve even greater things.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Enhanced Relationships:
              </b>
              Fulfillment nurtures positive, healthy relationships because it
              helps people be more present, supportive, and loving.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Fulillment;
