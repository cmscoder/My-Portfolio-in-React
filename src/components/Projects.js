import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import animationData from "../objects/projects.json";
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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 767);
  };
  useEffect(() => {
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  });

  return (
    <div id="projects-section" className="projects-section">
      <div data-aos="fade-down">
        <h1 className="projects-title">PROJECTS</h1>
        <div>
          {isDesktop ? (
            <Lottie
              className="lottie"
              src="../objects/projects.json"
              alt="title"
              options={defaultOptions}
              height={495}
              width={500}
            />
          ) : (
            <Lottie
              className="lottie"
              src="../objects/projects.json"
              alt="title"
              options={defaultOptions}
              height={230}
              width={186}
            />
          )}
        </div>
        <div className="projects__container">
          <div>
            <a
              className="lotties-license"
              href="https://lottiefiles.com/27436-business"
              target="_blank"
            >
              Lime @LottieFiles
            </a>
          </div>
          <div className="projects-content">
            <p>
              Web development projects are my pleasure as a professional. Every
              step in a project is a challenge and the results are an exciting
              satisfaction =). You can see my professional and learning projects
              clicking on the button below. I hope you enjoy it!
            </p>
          </div>
          <Link to="/portfolio" className="projects__button">
            <button className="button">See my Portfolio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
