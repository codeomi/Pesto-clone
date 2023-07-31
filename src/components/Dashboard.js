import React from "react";
import "./dashboard.scss";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2.js";
import Section3 from "./sections/Section3.js";
import Section4 from "./sections/Section4.js";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

export default Dashboard;
