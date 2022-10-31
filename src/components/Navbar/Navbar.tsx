import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-indigo-300">
        <input type="checkbox" id="checkbx"></input>
        <label htmlFor="checkbx" className="checkbtn">
          {/* <i className="fas fa-bars"></i> */}
        </label>

        {/* className="navbar navbar-expand-lg navbar-mainbg"> */}
        <NavLink className="logo" to="/">
          {" "}
          {/*exact */}
          Aaron Hardy
        </NavLink>

        {/* <i className="fas fa-bars text-white"></i> */}

        <ul>
          <li>
            <NavLink className="active" to="/">
              {" "}
              {/*exact*/}
              <i className="fas fa-tachometer-alt"></i>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes">
              {" "}
              {/*exact */}
              <i className="far fa-notebook"></i>
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {" "}
              {/*exact */}
              <i className="far fa-address-book"></i>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              {" "}
              {/*exact */}
              <i className="far fa-clone"></i>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {" "}
              {/*exact */}
              <i className="far fa-copy"></i>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-border"></div>
    </>
  );
};

export default Navbar;
