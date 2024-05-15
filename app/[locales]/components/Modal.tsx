import React from "react";

interface ModalProps {
  title?: string;
  text?: string;
  showButton?: boolean;
  buttonText?: string;
}

const Modal: React.FC<ModalProps> = ({ title = "", text = "", showButton = false, buttonText = "" }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      {
        showButton ? 
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{text}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">{buttonText}</button>
            </form>
          </div>
        </div> :
        <>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{text}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>{buttonText}</button>
          </form>
        </>
      }
    </dialog>
  );
}

export default Modal;
