import React from "react";
import "./section5.scss";
import { ArrowForward } from "@mui/icons-material";

const Section5 = () => {
  return (
    <>
      <div className="section5">
        <div className="section5-container">
          <div className="section5-img-container">
            <img
              src="https://global-uploads.webflow.com/637495e24e982a81f63e724a/63f1c0db0314aa1ef3300d08_ssds-s.webp"
              alt=""
            />
            <div className="blur-up"></div>
            <div className="blur-down"></div>
          </div>
          <div className="section5-header-description-container">
            <div className="header-description-container">
              <div className="header-container">Your Mentors</div>
              <div className="description-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellendus aspernatur harum a rerum. Quibusdam ea libero est
                alias quasi.
              </div>
              <div className="section5-button animation-button" type="button">
                <span>Become a Fellow</span>
                <ArrowForward id="arrow-id"></ArrowForward>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
