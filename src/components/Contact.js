import React from "react";
import animationData from "../objects/contact.json";
import Lottie from "react-lottie";

const Contact = () => {
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
      <h1 className="about-title">CONTACT</h1>
      <Lottie
        src="../objects/rocket.icon.json"
        alt="title"
        options={defaultOptions}
        height={600}
        width={600}
      />
      <div className="content-container">
        <div className="about__content">
          <div>my about right with photo</div>
          <div>my about right with text</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
