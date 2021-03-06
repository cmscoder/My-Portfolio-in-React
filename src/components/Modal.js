import React, { useEffect } from "react";
import Portfolio from "../pages/Portfolio";
import Data from "../objects/data.json";

const Modal = ({ closeModal, info, title, description }) => {
  let modalRef = null;

  const handleClose = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-box" ref={(node) => (modalRef = node)}>
        <div className="modal__title">
          <h3>{info.title}</h3>
        </div>
        <div className="modal__description">{info.description}</div>
        <div className="modal__button">
          <button onClick={closeModal} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
