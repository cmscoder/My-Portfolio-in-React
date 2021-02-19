import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import animationData from "../objects/about.json";
import Lottie from "react-lottie";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <header>
      <div className="header">
        <div className="content-container">
          <div className="header__content">
            <div>
              <Lottie
                src="../objects/about.json"
                alt="title"
                options={defaultOptions}
                height={470}
                width={600}
              />
            </div>
            <div className="header__title">
              <h1>
                Camila Silva
                <br />
              </h1>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
