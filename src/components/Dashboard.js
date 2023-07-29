import React from "react";
import "./dashboard.scss";
import Section1 from "./sections/Section1";
import Section3 from "./sections/Section3.js";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Section1 />
        <Section3 />
      </div>
    </>
  );
}

export default Dashboard;
