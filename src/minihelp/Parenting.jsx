import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Parenting = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Parenting Skill
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Parenting skills refer to the knowledge, techniques, and behaviors
            that help parents raise and nurture their children effectively.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why Do Parenting Skills Matter?
          </h1>
          <div className="">
            <ul className="ml-3 list-disc list-inside font-text text-text text-pretty text-sm md:text-base space-y-2">
              <li className="">
                <b className="font-text text-base md:text-xl mr-2">
                  Shape Child's Behavior and Character:
                </b>
                Good parenting instills positive behaviors and values in
                children, helping them navigate social interactions and build
                strong moral foundations
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Enhances Emotional Well-Being:
                </b>
                Parents who use positive support create a nurturing environment,
                helping children feel secure and loved, which boosts their
                emotional health.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Builds Strong Bonds:
                </b>{" "}
                Effective parenting strengthens the parent-child relationship,
                fostering trust, communication, and mutual respect.
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Promotes Independence:
                </b>
                By using balanced guidance and encouragement, parents can raise
                independent, self-confident children who are capable of handling
                challenges on their own
              </li>
              <li>
                <b className="font-text text-base md:text-xl mr-2">
                  Creates a Positive Family Dynamic:
                </b>
                ood parenting creates a harmonious family environment, reducing
                conflicts and fostering cooperation among family members.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className="ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className=""> Communicate Openly and Honestly</li>
              <li> Set Clear Boundaries and Rules</li>
              <li> Be a Role Model</li>
              <li> Teach Problem-Solving Skills</li>
              <li> Practice Emotional Support</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" text-text font-text ml-3 md:text-base list-disc list-inside d text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Healthy Emotional Development:
              </b>
              Children raised with positive parenting skills are more
              emotionally resilient, secure, and able to handle stress.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Improved Communication:
              </b>
              Open lines of communication help children feel heard and valued,
              which strengthens their relationships with parents and peers.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Higher Academic Achievement:
              </b>
              Supportive and engaged parenting fosters a love for learning and
              helps children excel academically.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Better Social Skills:
              </b>
              Good parenting equips children with the ability to form
              meaningful, respectful relationships with others.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Increased Confidence and Independence:
              </b>
              Effective parenting empowers children to make decisions, solve
              problems, and take responsibility for their actions, leading to
              greater self-confidence.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                Positive Family Relationships:
              </b>
              Strong parenting skills promote trust, cooperation, and love
              within the family, creating a nurturing and supportive home
              environment.
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <Footer />
    </div>
  );
};

export default Parenting;
