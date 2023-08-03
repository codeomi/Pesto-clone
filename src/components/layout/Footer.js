import React from "react";
import "./footer.scss"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-inner-container">
            <div className="container-1">
              <div className="f-1">
                <img src="" alt="" />
              </div>
              <div className="f-2">
                We take opportunities to places where talent exists.
              </div>
              <div className="f-3">
                <div className="f-3-1">Start Hirring</div>
                <div className="f-3-2">Apply as a Developer</div>
              </div>
            </div>
            <div className="container-2">
              <div className="f-4">
                <div className="f-4-li">For Developers</div>
                <div className="f-4-li">For Companies</div>
                <div className="f-4-li">For Mentors</div>
                <div className="f-4-li">Community</div>
                <div className="f-4-li">Careers</div>
              </div>
              <div className="f-5">
                {" "}
                <div className="f-4-li">About Us</div>
                <div className="f-4-li">Resources</div>
                <div className="f-4-li">Pesto Plus</div>
                <div className="f-4-li">Pesto Labs</div>
                <div className="f-4-li">Web3</div>
                <div className="f-4-li">Youtube</div>
              </div>
              <div className="f-6">
                {" "}
                <div className="f-4-li">FAQ's</div>
                <div className="f-4-li">Privacy Policy</div>
                <div className="f-4-li">Terms & Conditions</div>
              </div>
            </div>
            <div className="container-3">
              <div className="f-7">
                <div className="us-address">
                  <span>US Address </span>
                 <div className="address-text"> 355 Bryant Street, Unit# 403, San Francisco, California 94107</div>
                </div>
              </div>
              <div className="f-8">
                {" "}
                <div className="us-address">
                  <span>Indian Address </span>
                  <div className="address-text"> 303A, Hemkunt Chambers 89Nehru Place, Delhi 11019</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
