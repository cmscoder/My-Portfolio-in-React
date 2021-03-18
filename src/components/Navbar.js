import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const faCodeIcon = <FontAwesomeIcon icon={faCode} />;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <Link to="home" onClick={closeMobileMenu}>
        <div className="navbar-logo">C{faCodeIcon}S</div>
      </Link>
      <div className="nav-center">
        <div className="menu-icon" onClick={handleClick}>
          <div>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="projects-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="skills-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
