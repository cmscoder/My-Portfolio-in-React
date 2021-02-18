import React, { useEffect } from "react";
import Portfolio from "../pages/Portfolio";
import Modals from "../objects/modals.json";

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
      {Modals.map((modal, id) => {
        return (
          <div key={id} className="modal-box" ref={(node) => (modalRef = node)}>
            <div>
              <h3>{modal.title}</h3>
              <button onClick={closeModal} className="button">
                Close
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
