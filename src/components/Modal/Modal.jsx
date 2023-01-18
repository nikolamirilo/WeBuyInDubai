import React from "react";
import { useGlobalState } from "./../../context/GlobalContext";

const Modal = () => {
  const { isFormSubmited, setIsFormSubmited } = useGlobalState();
  return (
    <div id="info-modal" className="modal" style={{ display: isFormSubmited ? "block" : "none" }}>
      <div className="modal-content">
        <h3>Thank you for your submission!</h3>
        <p>Your response is sent.</p>
        <button
          onClick={() => {
            setIsFormSubmited(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
