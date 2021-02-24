import React, { useState, useEffect } from "react";
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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 1200);
  };
  useEffect(() => {
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  });

  return (
    <div
      id="projects-section"
      className="projects-section"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1100"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <h1 className="about-title">PROJECTS</h1>
      <div>
        {isDesktop ? (
          <Lottie
            className="lottie"
            src="../objects/about.json"
            alt="title"
            options={defaultOptions}
            height={495}
            width={500}
          />
        ) : (
          <Lottie
            className="lottie"
            src="../objects/about.json"
            alt="title"
            options={defaultOptions}
            height={230}
            width={186}
          />
        )}
      </div>
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
