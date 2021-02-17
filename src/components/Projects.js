import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import animationData from "../objects/rocket-icon.json";
import Lottie from "react-lottie";

const Projects = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="about-section">
      <h1 className="about-title">PROJECTS</h1>
      <Lottie
        src="../objects/rocket.icon.json"
        alt="title"
        options={defaultOptions}
        height={600}
        width={600}
      />
      <div className="content-container">
        <div className="about__content">
          <div>These are my projects</div>
          <div>my about right with text</div>
        </div>
      </div>
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>
    </div>
  );
};

export default Projects;

// Esse vai ser tipo tours.js
