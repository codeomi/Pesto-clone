import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./section7.scss";
import card1 from "../../assets/cards/first.webp";
import card2 from "../../assets/cards/second.webp";
import card3 from "../../assets/cards/third.webp";
import { Carousel } from "react-responsive-carousel";

const Section7 = () => {
  const isMobile = window.innerWidth <= 800;
  return (
    <>
      <div className="section7">
        <div className="section7-container">
          <div className="section7-hd-container">
            <div className="section7-heading-2">
              It’s not a community. It’s a collective of the world’s most
              talented developers
            </div>
            <div className="section7-description">
              Thousands of the world’s most ambitious developers have Pesto in
              common. It’s the place where builders come together to build
              projects, help each other find what’s next, and - most importantly
              - find people who have each other’s backs.
            </div>
            <div className="section7-button animation-button" type="button">
              <span>Become a Fellow</span>
              <ArrowForward id="arrow-id"></ArrowForward>
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            {" "}
            <div className="s7-img-slider">
              <Carousel
                className="s7-carousal-component"
                showThumbs={false}
                swipeable={true}
                autoPlay={true}
                interval={1500}
                stopOnHover={true}
                infiniteLoop={true}
                centerMode={true}
                centerSlidePercentage={30}
                showStatus={true}
                showIndicators={false}
              >
                <img className="s7-img" src={card1} alt="" />
                <img className="s7-img" src={card2} alt="" />
                <img className="s7-img" src={card3} alt="" />
                <img className="s7-img" src={card1} alt="" />
                <img className="s7-img" src={card2} alt="" />
                <img className="s7-img" src={card3} alt="" />
                <img className="s7-img" src={card1} alt="" />
                <img className="s7-img" src={card2} alt="" />
                <img className="s7-img" src={card3} alt="" />
              </Carousel>
            </div>
          </>
        ) : (
          <div className="s7-img-slider">
            <Carousel
              className="s7-carousal-component"
              showThumbs={false}
              swipeable={true}
              autoPlay={true}
              interval={1500}
              stopOnHover={true}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={30}
              showStatus={true}
              showIndicators={false}
            >
              <img className="s7-img" src={card1} alt="" />
              <img className="s7-img" src={card2} alt="" />
              <img className="s7-img" src={card3} alt="" />
              <img className="s7-img" src={card1} alt="" />
              <img className="s7-img" src={card2} alt="" />
              <img className="s7-img" src={card3} alt="" />
              <img className="s7-img" src={card1} alt="" />
              <img className="s7-img" src={card2} alt="" />
              <img className="s7-img" src={card3} alt="" />
            </Carousel>
          </div>
        )}
       
      </div>
    </>
  );
};

export default Section7;
