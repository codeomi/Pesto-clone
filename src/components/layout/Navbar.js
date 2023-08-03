import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"
import pestoLogo from "../../assets/img/images.png"

const Navbar = () => {
  return (
   <>
   <div className="navbar">
    <div className="navbar-container">
        <div className="logo-container">
            <img src={pestoLogo} alt="" />
        </div>
        <div className="li-items-container">
            <div className="li-item">For Companies</div>
            <div className="li-item">For Developers</div>
            <div className="li-item">Resources</div>
        </div>
        <div className="navbar-btn">
        <span>Get Started</span>
            <ArrowForward id="arrow-id"></ArrowForward>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Navbar