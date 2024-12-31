import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Equality = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="mt-10">
          <h1 className="font-primary text-4xl  py-16 mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            Equality
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="font-text text-text text-sm text-pretty md:text-xl">
            Equality refers to the state of being treated fairly and having the
            same rights, opportunities, and access to resources regardless of
            differences such as gender, race, ethnicity, socioeconomic status,
            or any other characteristic.
          </p>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Why is Role Model Important?
          </h1>
          <div className="">
            <p className="text-text font-text mb-5 text-sm md:text-xl">
              Equality matters because it is a fundamental human right and
              essential for the development of a fair and just society. When
              individuals or groups are denied equality, it creates division,
              discrimination, and oppression, leading to social and economic
              disparities.
            </p>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            How To Achieve It?
          </h1>
          <div className="">
            <ul className=" ml-3 text-text list-disc list-inside font-second text-pretty text-sm space-y-2 md:text-base">
              <li className="">Promote Equal Rights and Opportunities</li>
              <li> Raise Awareness and Educate</li>

              <li> Encourage Diversity and Inclusion</li>
              <li> Empower Marginalized Groups</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold font-primary py-5 md:text-3xl">
            Benefit
          </h1>
          <ul className=" ml-3 md:text-base list-disc list-inside font-text text-pretty text-sm space-y-2">
            <li className="">
              <b className="font-text text-base md:text-xl mr-2">
                Social Harmony:
              </b>
              Promotes peace, cooperation, and mutual respect between different
              groups in society.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Economic Growth:
              </b>
              Equal access to opportunities allows people to reach their full
              potential, contributing to a more productive and innovative
              economy
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
                Improved Well-Being:
              </b>
              When people feel equal and valued, it leads to better mental and
              physical health, reducing stress and promoting overall well-being.
            </li>
            <li>
              <b className="font-text text-base md:text-xl mr-2">
                {" "}
                Reduced Discrimination:
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

export default Equality;
