import React from "react";
import services from "../objects/services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

const Services = () => {
  return (
    <div className="section-padding">
      <div
        id="services-section"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="services-title">SERVICES</h1>
        <div className="services__subtitle">
          <h1>How it works?</h1>
        </div>

        {services.map((post, id) => {
          return (
            <div className="section-services" key={id}>
              <div className="services__content">
                <article
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  className="services__content"
                >
                  <div className="services-img">
                    <img src={post.image} alt="" />
                  </div>
                  <div>
                    <div className="list-title">
                      <h4>{post.title}</h4>
                    </div>
                    <div className="list-info">
                      <div className="list-info--content">
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
                          {post.check4 ? (
                            <FontAwesomeIcon icon={faCheck} />
                          ) : (
                            ""
                          )}
                          {post.check4}
                        </p>
                        <p>
                          {post.check5 ? (
                            <FontAwesomeIcon icon={faCheck} />
                          ) : (
                            ""
                          )}
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
    </div>
  );
};

export default Services;
