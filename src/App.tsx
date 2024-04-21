import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Calendar from "./containers/Calendar/Calendar";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    //console.log("handle open modal");
    setModalOpen(true);
  };
  return (
    <>
      <Calendar openModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
