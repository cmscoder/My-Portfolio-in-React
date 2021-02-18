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
          const bootstrap = post.bootstrap;
          return (
            <div key={id} className="list-columns">
              <article className="list-item">
                <img src={post.image} alt={post.title} />
                <footer>
                  <div className="list-info">
                    <div className="list-item__title">
                      <h4>{post.title}</h4>
                    </div>
                    <div className="tour-price">
                      <i className="devicon-html5-plain-wordmark colored">
                        {post.html}
                      </i>
                      <i className="devicon-css3-plain-wordmark colored">
                        {post.css}
                      </i>
                      <i className="devicon-javascript-plain colored">
                        {post.js}
                      </i>
                      {bootstrap ? (
                        <i className="devicon-bootstrap-plain-wordmark colored">
                          {post.bootstrap}
                        </i>
                      ) : (
                        ""
                      )}

                      <i className="devicon-bootstrap-plain-wordmark colored">
                        {post.bootstrap}
                      </i>
                    </div>
                  </div>
                  <div className="list-info--content">
                    <h3>{post.description}</h3>
                  </div>
                  <button onClick={handleShowModal}>More details</button>
                  {showModal && <Modal closeModal={closeModal} />}
                  <div className="list-info__icons">
                    <div className="tour-price">
                      <i className="devicon-chrome-plain">{post.browser}</i>
                      <i className="devicon-github-original">{post.github}</i>
                    </div>
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
