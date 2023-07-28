import React from "react";
import "./section1.scss";
import headphone from "../../assets/icons/headphone.webp";
import notepad from "../../assets/icons/notepad.webp";
import vase from "../../assets/icons/vase.webp";
import coffee from "../../assets/icons/coffee.webp";
import { ArrowForward } from "@mui/icons-material";

const Section1 = () => {
  return (
    <>
      <div className="section1">
        <img className="section1-img headphone" src={headphone} alt="" />
        <img className="section1-img notepad" src={notepad} alt="" />
        <img className="section1-img vase" src={vase} alt="" />
        <img className="section1-img coffee" src={coffee} alt="" />
        <div className="section-heading-container-1">
          <div className="heading-1">
            Personalised coaching for developers to evolve in their tech careers
          </div>
          <div className="description">
            90 minutes coaching sessions every week for 7 months
          </div>
        </div>
        <div className="section1-form-container">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="number" placeholder="Graduating Year" />
          </form>
          <div className="animated-btn section1-form-btn">
            <span>Get Started</span>
            <ArrowForward id="arrow-id"></ArrowForward>
          </div>
          <div className="form-footer">
            {" "}
            Application deadline is 29 July 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
