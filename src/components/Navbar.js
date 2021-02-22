import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const faCodeIcon = <FontAwesomeIcon icon={faCode} />;

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <Link to="home">
        <div className="nav-brand">C{faCodeIcon}S</div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="about-section">about</Link>
        </li>
        <li>
          <Link to="services-section">services</Link>
        </li>
        <li>
          <Link to="projects-section">projects</Link>
        </li>
        <li>
          <Link to="skills-section">skills</Link>
        </li>
        <li>
          <Link to="contact-section">contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
