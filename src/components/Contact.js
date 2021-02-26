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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 767);
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
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
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
        <div className="contact-container">
          <div className="contact-content">
            <div>
              First of all, Thank you very much for coming until here 😊 I
              really appreciate your visit and I hope that we can keep contact.
              So, feel free to contact me by email. Regardless of the time zone,
              I will answer you as soon as possible. See you soon!
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
