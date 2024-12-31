import { Outlet } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Help from "./component/Help";
// import HelpPage from "./component/HelpPage";
import About from "./component/About";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Help />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
