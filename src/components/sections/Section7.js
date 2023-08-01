import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./section7.scss"

const Section7 = () => {
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
      </div>
    </>
  );
};

export default Section7;
