import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "../../fonts/PoorStory/PoorStory-Regular.ttf";
import "../../fonts/Permanent_Marker/PermanentMarker-Regular.ttf";
import { FaStickyNote, FaUserTie } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoIosApps } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-gradient-to-br from-stone-800 to-stone-600 h-20 px-2 md:px-4 md:w-full">
        <NavLink
          className="logo-text my-2 sm:text-[30px] md:text-[35px]"
          to="/"
        >
          Aaron Hardy
        </NavLink>

        <div className="logo-art"></div>
        <ul>
          <li>
            <NavLink to="/notes">
              <FaStickyNote />
              <p>Notes</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FaUserTie />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <IoIosApps />
              <p>Services</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdContactMail />
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-border"></div>
    </>
  );
};

export default Navbar;
