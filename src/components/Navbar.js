import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const faCodeIcon = <FontAwesomeIcon icon={faCode} />;

// import logo from "../favicon.png";

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <NavLink to="/">
        <div className="nav-brand">C{faCodeIcon}S</div>
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/services">services</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact" href="#contact">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
