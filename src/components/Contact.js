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
    <div id="contact-section" className="contact-section">
      <div data-aos="fade-down">
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
          <div>
            <a
              className="lotties-license"
              href="https://lottiefiles.com/44123-customer-support-women"
              target="_blank"
            >
              Sheikh Sohel @LottieFiles
            </a>
          </div>
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
              <div className="footer-contact">
                <ul>
                  <li>
                    <a href="https://github.com/cmscoder" target="_blank">
                      <i className="devicon-github-original"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/camila-medeiros-silva/"
                      target="_blank"
                    >
                      <i className="devicon-linkedin-plain"></i>
                    </a>
                  </li>
                </ul>
                <div> © Camila Silva | 2021 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
