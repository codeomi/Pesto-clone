import { ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import pestoLogo from "../../assets/img/images.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <div className="menu-icon-container">
            <MenuIcon onClick={handleClick}></MenuIcon>
{/* 
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <Divider></Divider>
              <MenuItem>About</MenuItem>
            </Menu> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
