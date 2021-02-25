import React, { useEffect } from "react";
import Portfolio from "../pages/Portfolio";
import Data from "../objects/data.json";

const Modal = ({ closeModal, title, description }) => {
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
        <div>
          <h3>{title}</h3>
          <div className="modal__description">{description}</div>
        </div>
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
