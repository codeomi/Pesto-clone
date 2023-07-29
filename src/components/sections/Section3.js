import React, { useEffect } from "react";
import "./section3.scss";
import Tilt from 'react-parallax-tilt';

const Section3 = () => {


  return (
    <>
      <div className="section3">
        <Tilt className="parallax-effect" tiltMaxAngleX={2} tiltMaxAngleY={1}>
        <div className="section3-card-container">
          <div className="section3-card-description">
            <div className="big-card-heading">Who is this for?</div>
            <div className="big-card-description">
              You should have atleast 1+ years of proffessional experience in
              software developement
            </div>
            <div className="big-card-btn"></div>
          </div>
        </div>
        </Tilt>
      </div>
    </>
  );
};

export default Section3;
