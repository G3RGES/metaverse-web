/* eslint-disable no-unused-vars */
import React from "react";

// assets
import Logo from "../assets/logo.png";

// icons
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// components
// import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div>
      <div className="container py-2 md:py-0">
        <div className="flex">
          {/* logo section */}
          <div className="">
            <img className="" src={Logo} />
          </div>

          {/* desktop menu section */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
