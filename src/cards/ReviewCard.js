import React from "react";
import "./reviewcard.scss";
import profileImg from "../assets/profile/63da72882de402e690287ce7_vikalp-p-500.webp";

const ReviewCard = () => {
  return (
    <>
      <div className="review-card">
        <div className="review-card-profile">
          <img src={profileImg} alt="" />
          <div className="profile-name-designation-container">
            <div className="profile-name">Vikalp Patil</div>
            <div className="profile-designation">Software Engineer</div>
          </div>
        </div>
        <div className="review-container">
            <div className="triangle"></div>
          <div className="review-container-1">
            <div className="review-container-1-2">
              <div className="amount">100%</div>
              <div className="salary-hike-text">Salary hike after Pesto </div>
            </div>
            <div className="review-container-1-2">
              <div className="amount">100</div>
              <div className="salary-hike-text">Salary hike after Pesto </div>
            </div>
          </div>
          <div className="review-container-2">
            <div className="review-container-2-1">
              “I broke a lot of software engineering myths”
            </div>
            <div className="review-container-2-1-1">
              I broke software engineering myths after PestoPesto helped me in
              fast tracking my career. I always wanted to visit different
              countries and at a later point wanted to settle down with remote
              work. I got an opportunity to work as a remote developer through
              Pesto. Pesto frequently updates the curriculum according to the
              latest industry trends. Learning React helped me a lot in my
              journey. After the Pesto program, I broke a lot of software
              engineering myths. The soft skills training helped me change the
              way of approach when it comes to communication, team management
              and many more.I became economically more stable and could take big
              steps in my career.Thanks to the Pesto team. Pesto helped become
              economically stable while working remotely like I'd always wanted
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
