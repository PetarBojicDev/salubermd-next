import React from "react";

interface ModalProps {
    title?: string;
    text?: string;
}

const Modal: React.FC<ModalProps> = ({ title = "", text = "" }) => {
  return (
    <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{text}</p>
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
    </dialog>
  );
}

export default Modal;
