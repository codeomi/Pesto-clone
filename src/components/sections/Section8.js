import React from "react";
import "./section8.scss";
import ReviewCard from "../../cards/ReviewCard.js";

const Section8 = () => {
  return (
    <>
      <div className="section8">
        <div className="section8-container">
          <div className="section8-heading-container">
            <div className="section8-heading">
              Stories - From the next-gen <br /> developers of the world
            </div>
          </div>
          <div className="section8-card-wrapper">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;
