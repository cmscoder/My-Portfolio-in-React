import React, { useEffect } from "react";
import Portfolio from "../pages/Portfolio";

const Modal = ({ closeModal }) => {
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
        <h3>React Modal to see</h3>
        <button onClick={closeModal} className="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
