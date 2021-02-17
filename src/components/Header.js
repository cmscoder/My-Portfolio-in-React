import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = () => (
  <header>
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">Camila Silva</h1>
        <p>Web Developer</p>
        <div></div>
      </div>
    </div>
  </header>
);

export default Header;
