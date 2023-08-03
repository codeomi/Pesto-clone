import React from "react";
import "./section6.scss"
import { ArrowForward } from "@mui/icons-material";

const Section6 = () => {
  return (
    <>
      <div className="section6">
        <div className="section6-container">
          <div className="section6-container-1">
            <div className="s6-c-1-2">
              <div className="s6-c-1-2-1">2500+</div>
              <div className="s6-c-1-2-2">Students Enrolled</div>
            </div>
            <div className="s6-c-1-2">
              <div className="s6-c-1-2-1">2500+</div>
              <div className="s6-c-1-2-2">Students Enrolled</div>
            </div>
            <div className="s6-c-1-2">
              <div className="s6-c-1-2-1">2500+</div>
              <div className="s6-c-1-2-2">Students Enrolled</div>
            </div>
            <div className="s6-c-1-2">
              <div className="s6-c-1-2-1">2500+</div>
              <div className="s6-c-1-2-2">Students Enrolled</div>
            </div>
          </div>
          <div className="section6-container-2">
            <div className="fee-card">
              <div className="text-block-61">₹2.5L</div>
              <div className="text-block-62">₹1.8L</div>
              <div className="text-block-63">(Inclusive of all taxes)</div>
              <div className="text-block-64">
                Money-back if you choose to withdraw within 2 weeks. Please note
                blocking fee will be forfeited
              </div>
            </div>
          </div>
          <div className="section6-container-3">
            <div className="section6-heading">Fee Structure</div>
            <div className="section6-description">
              You can get access to extremely affordable EMI options from our
              partners. The monthly instalments can be as low as ₹7,500
            </div>
            <div className="section6-button animation-button" type="button">
              <span>Request a Callback</span>
              <ArrowForward id="arrow-id"></ArrowForward>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
