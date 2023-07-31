import React from "react";
import "./section2.scss";
import { ArrowForward } from "@mui/icons-material";

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="section2-container">
          <div className="section2-container-grid-container">
            <div className="what-is-container">
              <div className="section2-heading-container">
                <div className="section2-heading">
                  What is the Pesto Fellowship?
                </div>
                <div className="section2-description">
                  Pesto fellows attend an 10-month-long curriculum that
                  transforms them into global product engineers. After the
                  learning stage, our placement team helps them secure
                  competitively-benchmarked, remote-first jobs.
                  <br />
                  <br />
                  Pesto fellows are sought out by the world’s top product
                  companies and VC-backed startups alike.
                </div>
                <div className="section2-button animation-button" type="button">
                  <span>Request a callback</span>
                  <ArrowForward id="arrow-id"></ArrowForward>
                </div>
              </div>
            </div>
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
