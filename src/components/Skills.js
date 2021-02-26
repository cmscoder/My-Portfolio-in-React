import React, { useState, useEffect } from "react";
import animationData from "../objects/skills.json";
import Lottie from "react-lottie";
import AOS from "aos";

const Skills = () => {
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
    <div className="section-skills">
      <div
        id="skills-section"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1100"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="about-title">SKILLS</h1>
        <div>
          {isDesktop ? (
            <Lottie
              className="lottie"
              src="../objects/about.json"
              alt="title"
              options={defaultOptions}
              height={470}
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
        <div className="skills-container">
          <div className="skills__content">
            <p>
              I have been improving my skills through courses and professional
              work, always concerned with being aware of new technologies and
              updates.
            </p>
          </div>
        </div>
        <div
          className="skills"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className=" skills-icon">
            <i className="icon-content devicon-html5-plain colored "></i>
            <p className="icon-font">HTML5</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-css3-plain colored icon-content"></i>
            <p className="icon-font">CSS3</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-sass-original colored icon-content"></i>
            <p className="icon-font">SASS</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-bootstrap-plain colored icon-content"></i>
            <p className="icon-font">Bootstrap</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-javascript-plain colored icon-content"></i>
            <p className="icon-font"> Javascript</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-jquery-plain colored icon-content"></i>
            <p className="icon-font">Jquery</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-react-original colored icon-content"></i>
            <p className="icon-font">React</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-redux-original colored icon-content"></i>
            <p className="icon-font">Redux</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-nodejs-plain colored icon-content"></i>
            <p className="icon-font">NodeJs</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-babel-plain colored icon-content"></i>
            <p className="icon-font">Babel</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-firebase-plain colored icon-content"></i>
            <p className="icon-font">Firebase</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-webpack-plain colored icon-content"></i>
            <p className="icon-font">Webpack</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-ruby-plain colored icon-content"></i>
            <p className="icon-font">Ruby</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-rails-plain colored icon-content"></i>
            <p className="icon-font">Rails</p>
          </div>

          <div className="skills-icon">
            <i className="devicon-postgresql-plain colored icon-content"></i>
            <p className="icon-font">PostgreSQL</p>
          </div>
          <div className="skills-icon">
            <i className="devicon-git-plain icon-content"></i>
            <p className="icon-font">Git</p>
          </div>
          <div className="skills-icon">
            <i className="devicon-github-original icon-content"></i>
            <p className="icon-font">Github</p>
          </div>
          <div className="skills-icon">
            <i className="devicon-heroku-plain colored icon-content"></i>
            <p className="icon-font">Heroku</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
