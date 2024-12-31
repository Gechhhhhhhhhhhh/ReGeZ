import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Footer";
const ContactPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-bg p-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
