import React, { useState, useEffect } from "react";
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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 767);
  };
  useEffect(() => {
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  });

  
  return (
    <header>
      <div className="header">
        <div className="content-container">
          <div className="header__content">
            <div>
              {isDesktop ? (
                <Lottie
                  className="lottie"
                  src="../objects/about.json"
                  alt="title"
                  options={defaultOptions}
                  height={470}
                  width={600}
                />
              ) : (
                <Lottie
                  className="lottie"
                  src="../objects/about.json"
                  alt="title"
                  options={defaultOptions}
                  height={230}
                  width={285}
                />
              )}
              <div>
                <a
                  className="lotties-license__header"
                  href="https://lottiefiles.com/26600-under-maintenance-work-in-progress"
                  target="_blank"
                >
                  Illya Pavlov @LottieFiles
                </a>
              </div>
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
