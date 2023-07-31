import React from "react";
import "./section4.scss";
import { ArrowForward ,ArrowBackIos} from "@mui/icons-material";

const Section4 = () => {
  return (
    <>
      <div className="section4">
        <div className="section4-1-container">
          <div className="heading-description-container">
            <div className="heading2">Pesto’s 40 Weeks Curriculum</div>
            <div className="descriptiom">
              Get intensive technical up-skilling, level up your soft skills,
              build a live project, and get placement support.
            </div>
          </div>
        </div>
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-arrow">
              <ArrowBackIos id="section4-arrow-btn"></ArrowBackIos>
            </div>
            <div className="carousal-heading-container">
              <div className="carousal-heading">Theory</div>
              <div className="carousal-heading">Project Building</div>
              <div className="carousal-heading">Interview Prep</div>
            </div>
            <div className="carousel-arrow">
              <ArrowForward id="section4-arrow-btn"></ArrowForward>
            </div>
          </div>
          <div className="cards-container"></div>
        </div>
      </div>
    </>
  );
};

export default Section4;
