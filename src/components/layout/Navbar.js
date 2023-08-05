import { ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import pestoLogo from "../../assets/img/images.png";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, SwipeableDrawer } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  useEffect(() => {
    console.log("clicked the btn" + open);
  }, [open]);
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
            <ArrowForward
              onClick={() => setOpen(true)}
              id="arrow-id"
            ></ArrowForward>
          </div>
          <div className="menu-icon-container">
            <MenuIcon></MenuIcon>
            <SwipeableDrawer
              anchor={"right"}
              open={open}
              // onClose={toggleDrawer(anchor, false)}
              // onOpen={toggleDrawer(anchor, true)}
            >
              <div className="">Profile</div>
            </SwipeableDrawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
