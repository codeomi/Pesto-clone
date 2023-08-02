import React, { useState } from "react";
import "./section8.scss";
import ReviewCard from "../../cards/ReviewCard.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



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
            <div className="s8-blur-left"></div>
            <div className="s8-blur-right"></div>
          <Carousel showThumbs={true} swipeable={true} autoPlay={true} interval={2000} useKeyboardArrows={true} showArrows={true} infiniteLoop={true} centerMode={true} autoFocus={true} centerSlidePercentage={40} showStatus={false}  >
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;
