import React from "react";
import services from "../objects/services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

const Services = () => {
  return (
    <div id="services-section" className="section-services">
      <h1 className="services-title">SERVICES</h1>

      <div className="services__subtitle">
        <h2>How it works?</h2>
      </div>

      {services.map((post, id) => {
        return (
          <div key={id}>
            <div className="services__content">
              <article data-aos="fade-left" className="services__content">
                <div className="services-img">
                  <img src={post.image} alt="" />
                </div>
                <div>
                  <div className="services__list-title">
                    <h4>{post.title}</h4>
                  </div>
                  <div className="services">
                    <div className="services__list-content">
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        {post.check1}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        {post.check2}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        {post.check3}
                      </p>
                      <p>
                        {post.check4 ? <FontAwesomeIcon icon={faCheck} /> : ""}
                        {post.check4}
                      </p>
                      <p>
                        {post.check5 ? <FontAwesomeIcon icon={faCheck} /> : ""}
                        {post.check5}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
