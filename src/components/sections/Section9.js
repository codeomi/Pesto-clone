import React from "react";
import "./sectio9.scss";
import profileImg from "../../assets/profile/63da72882de402e690287ce7_vikalp-p-500.webp";
import profile2Img from "../../assets/profile/profile-2.webp";
import profile3Img from "../../assets/profile/profile-3.webp";
import profile4Img from "../../assets/profile/profile-4.webp";
import v1Image from "../../assets/profile/video-img-1.webp";
import v2Image from "../../assets/icons/63da5c38be1160412c5f9a23_FneHpr6aUAArGQZ-p-500.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import playBtn from "../../assets/icons/play-btn.svg";

const Section9 = () => {
  return (
    <>
      <div className="section9">
        <div className="section9-container">
          <div className="s9-c-1">
            <div className="s9-heading-description-container">
              <div className="s9-heading">
                This what world is saying about us
              </div>
              <div className="s9-description">
                95% of the world's tech talent is international. Pesto curates
                the best developers of the world that are ready for their next
                big opportunity.{" "}
              </div>
            </div>
          </div>
          <div className="s9-c-2">
            <div className="col-1">
              <div className="col-1-1 padding-bottom-1">
                <div className="col-1-1-1">#welovepesto</div>
                <div className="col-1-1-1-1">
                  I graduated from Pesto in 2020 August, where I am now? (A
                  combined effort of Pesto and me. It’s never about only one
                  side, both have to work simultaneously) <br /> Able to happily
                  pay big debts every month. Before they were killing me. Big
                  relief now :)
                </div>
                <div className="col-1-1-1-2">
                  <img src={profileImg} alt="" />
                  <div className="s9-name-designation">
                    <div className="s9-name">Vaibhav Arora</div>
                    <div className="s9-designatiom">@vaibhav_arora</div>
                  </div>
                </div>
              </div>
              <div className="col-1-1 no-border padding-top-1">
                <div className="col-1-1-1-1">
                  I graduated from Pesto in 2020 August, where I am now? (A
                  combined effort of Pesto and me. It’s never about only one
                  side, both have to work simultaneously) <br /> Able to happily
                  pay big debts every month. Before they were killing me. Big
                  relief now :)
                </div>
                <div className="col-1-1-1-2">
                  <img src={profile3Img} alt="" />
                  <div className="s9-name-designation">
                    <div className="s9-name">Sourabh Ansari</div>
                    <div className="s9-designatiom">Software Developer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <a href="">
                <img id="play-btn" src={playBtn} alt="" />
                <img id="video-profile-img" src={v1Image} alt="" />
              </a>
            </div>
            <div className="col-3">
              <img id="video-img2" src={v2Image} alt="" />
              <div className="col-1-1-1-1">
                Thanks for the wonderful swag and a great chance to talk to the
                community last year!
              </div>
              <div className="col-1-1-1-2">
                <img src={profile2Img} alt="" />
                <div className="s9-name-designation">
                  <div className="s9-name">Vaibhav Arora</div>
                  <div className="s9-designatiom">@vaibhav_arora</div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="col-1-1  ">
                <div className="col-1-1-1-1">
                  Pesto fast forwarded me by atleast 2 years in my career. The
                  team is utterly great in terms of their knowledge and
                  especially in co-operating with us. The amount of things that
                  I have learnt here in 2-3 months is something I couldn't have
                  learnt by my own in maybe 2 years.I have been elevated as a
                  Developer quite a lot with Pesto's help.
                </div>
                <div className="col-1-1-1-2">
                  <img src={profile4Img} alt="" />
                  <div className="s9-name-designation">
                    <div className="s9-name">Sourabh Ansari</div>
                    <div className="s9-designatiom">Full Stack Developer</div>
                  </div>
                </div>
              </div>
              <div className="col-1-1 no-border padding-top-1">
                <div className="col-1-1-1-1">
                  Pesto fast forwarded me by atleast 2 years in my career. The
                  team is utterly great in terms of their knowledge and
                  especially in co-operating with us. The amount of things that
                  I have learnt here in 2-3 months is something I couldn't have
                  learnt by my own in maybe 2 years.I have been elevated as a
                  Developer quite a lot with Pesto's help.
                </div>
                <div className="col-1-1-1-2">
                  <img src={profile4Img} alt="" />
                  <div className="s9-name-designation">
                    <div className="s9-name">Sourabh Ansari</div>
                    <div className="s9-designatiom">Full Stack Developer</div>
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

export default Section9;
