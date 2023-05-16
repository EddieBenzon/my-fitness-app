import { NavLink } from "react-router-dom";

import React from "react";
import { GiBiceps } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <IconContext.Provider value={{ className: "site-logo" }}>
        <GiBiceps />
      </IconContext.Provider>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/"
      >
        <div>Home</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="about"
      >
        <div>About</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
