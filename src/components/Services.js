import React from "react";
import services from "../objects/services.json";
import Lottie from "react-lottie";
import animationData from "../objects/business.json";

const Services = () => {
  return (
    <div className="section-padding">
      <h1 className="services-title">SERVICES</h1>
      <div className="services__subtitle">
        What can I do for you? See the services
      </div>

      {services.map((post, id) => {
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        };
        return (
          <div className="section-padding">
            <div key={id} className="about__content">
              <article className="services__content">
                <div className="services-img">
                  <Lottie
                    src={post.image}
                    alt={post.title}
                    options={defaultOptions}
                    height={400}
                    width={400}
                  />
                </div>
                <div>
                  <div className="list-info">
                    <div className="list-item__title">
                      <h4>{post.title}</h4>
                    </div>
                    {post.technologies.map((technologie, id) => {
                      return (
                        <div key={id} className="list-info--content">
                          <p>
                            <i className="devicon-react-original-wordmark colored">
                              {technologie.html}
                            </i>
                          </p>
                          <p>
                            <i className="devicon-css3-plain-wordmark colored">
                              {technologie.css}
                            </i>
                          </p>
                          <p>
                            <i className="devicon-javascript-plain colored">
                              {technologie.js}
                            </i>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="list-info--content">
                    <h3>{post.description}</h3>
                  </div>
                  <div className="list-info__icons">
                    {post.icons.map((icon, id) => {
                      return (
                        <div key={id} className="tour-price">
                          <i className="devicon-chrome-plain">{icon.browser}</i>

                          <i className="devicon-github-original">
                            {icon.github}
                          </i>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </div>
        );
      })}
      <div className="services__content">
        <div className="list-columns">
          <article className="list-item">
            <img src="/images/multitasking-services.png" alt="" />
            <footer>
              <div className="list-info">
                <div className="list-item__title">
                  <h4>Make your website</h4>
                </div>
                <div className="list-info--content">
                  <div>my about right with photo</div>
                  <div>my about right with text</div>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
