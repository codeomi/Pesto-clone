import React from "react";
import "./section4card.scss";
import image from "../assets/img/63da15f14a5c0047495cca68_Salary0002.webp";

const Section4Card = () => {
  return (
    <>
      <div className="section4-card">
        <div className="section4-1">
          <img className="section4-card-img" src={image} alt="this is a ge" />
        </div>
        <div className="section4-2">
          <div className="section4-2-1">
            <div className="section4-card-heading">Theory</div>
            <div className="section4-card-description-container">
              <div className="line-container">
                <div className="line"></div>
              </div>
              <div className="bullet-points-description-container">
                <div className="bullet-point-container">
                  <div className="bullet-point">
                    <div className="bullet-circle"></div>
                  </div>
                  <div className="bullet-point-description">
                    Live lectures by top instructors
                  </div>
                </div>
                <div className="bullet-point-container">
                  <div className="bullet-point">
                    <div className="bullet-circle"></div>
                  </div>
                  <div className="bullet-point-description">
                    L 40+ hours of video lectures on HTML/CSS, <br /> JavaScript,
                    ReactJS, NodeJS, and <br /> High-Quality coding standards
                  </div>
                </div>
                <div className="bullet-point-container">
                  <div className="bullet-point">
                    <div className="bullet-circle"></div>
                  </div>
                  <div className="bullet-point-description">
                    Live lectures by top instructors
                  </div>
                </div>
                <div className="bullet-point-container">
                  <div className="bullet-point">
                    <div className="bullet-circle"></div>
                  </div>
                  <div className="bullet-point-description">
                    Live lectures by top instructors
                  </div>
                </div>
                <div className="bullet-point-container">
                  <div className="bullet-point">
                    <div className="bullet-circle"></div>
                  </div>
                  <div className="bullet-point-description">
                    Live lectures by top instructors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4Card;
