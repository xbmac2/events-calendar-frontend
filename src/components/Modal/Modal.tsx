import { useEffect, useRef, useState } from "react";
import Form from "../Form/Form";
//import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
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
      <Form />
    </dialog>
  );
};

export default Modal;
