import React, { useState } from "react";
import Data from "../objects/data.json";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="section-padding">
      <div className="content-container">
        <h1 className="list-title">Portfolio with projects</h1>
        {Data.map((post, id) => {
          return (
            <div key={id} className="list-columns">
              <article className="list-item">
                <img src={post.image} alt={post.title} />
                <footer>
                  <div className="list-info">
                    <div className="list-item__title">
                      <h4>{post.title}</h4>
                    </div>
                    {post.technologies.map((technologie, id) => {
                      return (
                        <div key={id} className="tour-price">
                          <i className="devicon-react-original-wordmark colored">
                            {technologie.html}
                          </i>
                          <i className="devicon-css3-plain-wordmark colored">
                            {technologie.css}
                          </i>
                          <i className="devicon-javascript-plain colored">
                            {technologie.js}
                          </i>
                        </div>
                      );
                    })}
                  </div>
                  <div className="list-info--content">
                    <h3>{post.description}</h3>
                  </div>
                  <button onClick={handleShowModal}>More details</button>
                  {showModal && <Modal closeModal={closeModal} />}
                  <div className="list-info__icons">
                    {post.icons.map((icon, id) => {
                      return (
                        <div key={id} className="tour-price">
                          <i class="devicon-chrome-plain">{icon.browser}</i>

                          <i class="devicon-github-original">{icon.github}</i>
                        </div>
                      );
                    })}
                  </div>
                </footer>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

// Esse vai ser tipo Tour.js
