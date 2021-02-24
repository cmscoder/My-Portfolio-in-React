import React, { useState } from "react";
import Data from "../objects/data.json";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);

  // startCreateEventHandler = (creatingId) => {
  //   setCreatingId(creatingId);
  // }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="section-portfolio">
      <div className="content-container">
        <h1 className="list-title">Portfolio with projects</h1>

        {Data.map((post, id) => {
          // const card = () => {
          //   switch (post.id) {
          //     case 3:
          //       return { width: 612 };
          //     case 4:
          //       return { width: 612 };
          //     case 6:
          //       return { width: 612 };
          //     case 7:
          //       return { width: 612 };
          //   }
          // };
          // style={card()} put it in div list-columns

          return (
            <div key={id}>
              <div className="list-columns">
                <article className="list-item">
                  <img src={post.image} alt={post.title} />
                  <footer>
                    <div className="list-info">
                      <div className="list-item__title">
                        <h4>{post.title}</h4>
                      </div>
                      <div className="tour-price">
                        <i className="devicon-html5-plain colored list-technologies__icons">
                          {post.html}
                        </i>
                        <i className="devicon-css3-plain colored list-technologies__icons">
                          {post.css}
                        </i>
                        <i className="devicon-javascript-plain colored list-technologies__icons">
                          {post.js}
                        </i>
                        {"bootstrap" in post ? (
                          <i className="devicon-bootstrap-plain colored list-technologies__icons">
                            {post.bootstrap}
                          </i>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="list-info--content"></div>

                    {showModal && <Modal closeModal={closeModal} {...post} />}
                    <div className="list-info__icons">
                      <button className="button" onClick={handleShowModal}>
                        More details
                      </button>
                      <ul>
                        <li>
                          <a href={post.urlproject} target="_blank">
                            {"browser" in post ? (
                              <i className="devicon-chrome-plain">
                                {post.browser}
                              </i>
                            ) : (
                              ""
                            )}
                          </a>
                        </li>
                        <li>
                          <a href={post.urlgithub} target="_blank">
                            {"github" in post ? (
                              <i className="devicon-github-original">
                                {post.github}
                              </i>
                            ) : (
                              ""
                            )}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

// Esse vai ser tipo Tour.js
