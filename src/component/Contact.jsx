import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-bg mt-20">
      <div className="">
        <div className="py-10 px-2" data-aos="fade-up">
          <h1 className="font-primary sm:text-4xl font-bold text-2xl mx-auto text-center hover:underline transition-all duration-100 hover:text-second">
            More Ways to Connect
          </h1>
          <p className="text-center mt-3 font-second sm:text-sm text-xs">
            We're here to listen and support you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-20">
          <div className="px-5 grid grid-rows gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 -mt-16 ">
            <div className="text-center" data-aos="fade-up">
              <div className=" flex items-center justify-center">
                <MdOutlineEmail className="text-5xl" />
              </div>
              <h1 className="text-2xl font-extrabold font-primary ">Email</h1>
              <p className="text-sm py-1 font-second">
                Please contact through our official email address.
              </p>
              <button className="hover:underline">
                regenerative.genz@gmail.com
              </button>
            </div>
            <div className="text-center" data-aos="fade-up">
              <div className=" flex items-center justify-center">
                <MdOutlinePhone className="text-5xl" />
              </div>
              <h1 className="text-2xl font-extrabold font-primary ">Phone</h1>
              <p className="text-sm py-1 font-second">
                Reach out to us anytime, We'll answer as soon as we can
              </p>
              <button className="hover:underline">+855 71 776 0209</button>
            </div>
            <div className="text-center" data-aos="fade-up">
              <div className=" flex items-center justify-center">
                <FaTelegramPlane className="text-5xl" />
              </div>
              <h1 className="text-2xl font-extrabold font-primary ">
                Telegram
              </h1>
              <p className="text-sm py-1 font-second">
                Reach out to our team regarding any questions you have. We're
                here to help.
              </p>
              <button className="hover:underline">
                <Link to="https://t.me/Regenerative_Genz9">
                  https://t.me/Regenerative_Genz9
                </Link>
              </button>
            </div>
            <div className="text-center" data-aos="fade-up">
              <div className=" flex items-center justify-center">
                <FaMapMarkerAlt className="text-5xl" />
              </div>
              <h1 className="text-2xl font-extrabold font-primary ">Office</h1>
              <p className="text-sm py-1 font-second">
                Reach out to us anytime, We're ready to help
              </p>
              <button className="hover:underline">
                We're an online community.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
