import React from "react";
import animationData from "../objects/contact.json";
import Lottie from "react-lottie";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    <div
      id="contact-section"
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
      <h1 className="about-title">CONTACT</h1>
      <Lottie
        src="../objects/rocket.icon.json"
        alt="title"
        options={defaultOptions}
        height={500}
        width={500}
      />
      <div className="content-container">
        <div className="">
          <div className="projects-content">
            Feel free to contact me by email when you need to. Regardless of the
            time zone, I will answer you as soon as possible
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              Email: camila_m_s@outlook.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
