import React, { useState, useEffect } from "react";
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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 1200);
  };
  useEffect(() => {
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  });

  return (
    <div className="contact-section">
      <div
        id="contact-section"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1100"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="about-title">CONTACT</h1>
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
        <div className="content-container">
          <div className="contact-content">
            <div>
              Feel free to contact me by email when you need to. Regardless of
              the time zone, I will answer you as soon as possible
              <div className="contact-content__email">
                <FontAwesomeIcon icon={faEnvelope} />
                Email: camila_m_s@outlook.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
