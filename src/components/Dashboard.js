import React, { useEffect } from "react";
import "./dashboard.scss";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2.js";
import Section3 from "./sections/Section3.js";
import Section4 from "./sections/Section4.js";
import Section5 from "./sections/Section5.js";
import Section6 from "./sections/Section6.js";
import Section7 from "./sections/Section7.js";
import Section8 from "./sections/Section8.js";
import Section9 from "./sections/Section9.js";
import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className="dashboard">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </>
  );
}

export default Dashboard;
