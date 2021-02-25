import React, { useState, useEffect } from "react";
import AOS from "aos";
import { toISODateString } from "react-dates";

const About = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);
  const updateAnimation = () => {
    setDesktop(window.innerWidth > 992);
  };
  useEffect(() => {
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  });

  return (
    <div id="about-section" className="about-section">
      <h1 className="about-title">ABOUT ME</h1>
      <div className="content-container">
        {isDesktop ? (
          <div className="about__content">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h1>Hello... Welcome to my Portfolio!</h1>
              <p>
                What can I tell about me? I am a Web Developer with background
                in Information Management and many years of experience in
                administrative areas. I chose programming area because I
                discovered in the code my inspiration as well as new challenges
                that stimulate me every day. I have certifications in some
                courses like freecodecamp, udemy, codeacademy, SheCodes , and Le
                Wagon bootcamp.
              </p>
              <p>
                I have been working as freelancer remotely with my best partner
                (a cockatiel =) ). I am pleased to see client satisfaction when
                the product is ready.
              </p>
              <p>
                In my free times, I am a going out person because being with my
                friends and family is the best time, I love going to the beach
                to enjoy the summer, but in the winter, I enjoy watching series,
                movies and reading good books. Besides, I really like to travel
                and get to know different cultures.
              </p>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img className="about-img" src="/images/my-photo.jpeg" alt="" />
            </div>
          </div>
        ) : (
          <div className="about__content">
            <div>
              <img className="about-img" src="/images/my-photo.jpeg" alt="" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h1>Hello!!</h1>
              <p>
                What can I tell about me? I am a Web Developer with background
                in Information Management and many years of experience in
                administrative areas. I chose programming area because I
                discovered in the code my inspiration as well as new challenges
                that stimulate me every day. I have certifications in some
                courses like freecodecamp, udemy, codeacademy, SheCodes , and Le
                Wagon bootcamp.
              </p>
              <p>
                I have been working as freelancer remotely with my best partner
                (a cockatiel =) ). I am pleased to see client satisfaction when
                the product is ready.
              </p>
              <p>
                In my free times, I am a going out person because being with my
                friends and family is the best time, I love going to the beach
                to enjoy the summer, but in the winter, I enjoy watching series,
                movies and reading good books.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
