import React from "react";
import "./dashboard.scss";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2.js";
import Section3 from "./sections/Section3.js";
import Section4 from "./sections/Section4.js";
import Section5 from "./sections/Section5.js";
import Section7 from "./sections/Section7.js";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
      </div>
    </>
  );
}

export default Dashboard;
