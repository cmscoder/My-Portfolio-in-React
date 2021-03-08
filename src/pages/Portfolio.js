import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../objects/data.json";
import Navbar from "../components/Navbar";
import LoadingPage from "../components/LoadingPage";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const handleShowModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <div className="section-portfolio">
        <div className="content-container">
          <h1 className="list-title">My projects</h1>

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
              <div key={post.id}>
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
                          {"ruby" in post ? (
                            <i className="devicon-ruby-plain colored list-technologies__icons">
                              {post.ruby}
                            </i>
                          ) : (
                            ""
                          )}
                          {"rails" in post ? (
                            <i className="devicon-rails-plain colored list-technologies__icons">
                              {post.rails}
                            </i>
                          ) : (
                            ""
                          )}
                          {"sass" in post ? (
                            <i className="devicon-sass-plain colored list-technologies__icons">
                              {post.sass}
                            </i>
                          ) : (
                            ""
                          )}
                          {"react" in post ? (
                            <i className="devicon-react-plain colored list-technologies__icons">
                              {post.sass}
                            </i>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="list-info--content"></div>

                      {showModal && (
                        <Modal closeModal={closeModal} info={selectedId} />
                      )}

                      <div className="list-info__icons">
                        <button
                          className="button button-details"
                          onClick={() => handleShowModal(post)}
                        >
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
          <footer>
            <Link to="/">
              <button className=" button">
                <FontAwesomeIcon icon={faBackward} className="icon-color" />
                Back Home
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// Esse vai ser tipo Tour.js
