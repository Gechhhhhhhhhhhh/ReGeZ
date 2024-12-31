import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import HelpPage from "../component/HelpPage";

import AboutPage from "../component/AboutPage";
import FaqPage from "../component/FaqPage";
import ContactPage from "../component/ContactPage";
import Postives from "../minihelp/Postive";
import Growth from "../minihelp/Growth";
import Communication from "../minihelp/Communication";
import Equality from "../minihelp/Equality";
import Emotional from "../minihelp/Emotional";
import Freedom from "../minihelp/Freedom";
import Fulillment from "../minihelp/Fulillment";
import Parenting from "../minihelp/Parenting";
import Wamth from "../minihelp/Wamth";
import Models from "../minihelp/Models";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/helppage",
    element: <HelpPage />,
  },
  {
    path: "/helpage/positive",
    element: <Postives />,
  },
  {
    path: "/helpage/growth",
    element: <Growth />,
  },
  {
    path: "/helpage/communication",
    element: <Communication />,
  },
  {
    path: "/helpage/equality",
    element: <Equality />,
  },
  {
    path: "/helpage/emotional",
    element: <Emotional />,
  },
  {
    path: "/helpage/freedom",
    element: <Freedom />,
  },
  {
    path: "/helpage/fulillment",
    element: <Fulillment />,
  },
  {
    path: "/helpage/parenting",
    element: <Parenting />,
  },
  {
    path: "/helpage/wamth",
    element: <Wamth />,
  },
  {
    path: "/helpage/models",
    element: <Models />,
  },

  {
    path: "/aboutpage",
    element: <AboutPage />,
  },

  {
    path: "/faqpage",
    element: <FaqPage />,
  },
  {
    path: "/contactpage",
    element: <ContactPage />,
  },
]);

export default router;
