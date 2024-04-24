import { useEffect, useRef, useState } from "react";
import Form from "../Form/Form";
import EventDetails from "../EventDetails/EventDetails";
//import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  //kind: "form" | "eventDetails";
  //chidlren: any;
}

const Modal = ({ children, isOpen, onClose }: any) => {
  const [isModalOpen, setModalOpen] = useState(true);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
      <button onClick={handleCloseModal}>Close button</button>
      {/* <Form handleCloseModal={handleCloseModal} /> */}
      {children}
      {/* <EventDetails /> */}
    </dialog>
  );
};

export default Modal;
