import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import animationData from "../objects/rocket-icon.json";
import Lottie from "react-lottie";
import AOS from "aos";

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
    <div
      id="projects-section"
      className="section"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <h1 className="about-title">PROJECTS</h1>
      <Lottie
        src="../objects/rocket.icon.json"
        alt="title"
        options={defaultOptions}
        height={500}
        width={500}
      />
      <div className="content-container">
        <div className="projects-content">
          <p>
            Projects in web development are my pleasure as a professional. Every
            step in a project is a challenge and the results are an exciting
            satisfaction =). You can see my professional and learning projects
            clicking in the button below. I hope that you enjoy it!
          </p>
        </div>
        <Link to="/portfolio" className="projects__button">
          <button className="button">See the Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

// Esse vai ser tipo tours.js
