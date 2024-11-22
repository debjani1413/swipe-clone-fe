import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBell,
  faBullhorn,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo-w.svg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo" />
      <div className="cpm-name">
        <div className="name-logo">EY</div>
        <div className="add">
          <span>EY</span>
          <span>+</span>
        </div>
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input placeholder="Search or Jump to..." />
        <div className="placeholder2">ctrl+k</div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBolt} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faBullhorn} className="icon" />
        <FontAwesomeIcon icon={faCircleUser} className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
