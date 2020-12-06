import React from "react";
import "./styles.css";

function Modal({ showModal, setShowModal }) {
  const closeModal = () => setShowModal(false);
  return (
    <div>
      {showModal ? (
        <div className="modal-container">
          <h1>modal</h1>
          <div className="close-modal-btn" onClick={closeModal}>
            {" "}
            x{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
