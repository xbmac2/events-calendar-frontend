import { useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Calendar from "../../containers/Calendar/Calendar";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";
import Form from "../../components/Form/Form";
import EventDetails from "../../components/EventDetails/EventDetails";

const CalendarPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { setSelectedDate } = useContext(SelectedDateContext);

  const [modalType, setModalType] = useState<string>("");

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = (clickedDate: Date) => {
    console.log(clickedDate.toLocaleDateString());
    console.log(clickedDate.toISOString().substring(0, 10));
    setSelectedDate(clickedDate);
    //console.log("handle open modal");
    setModalOpen(true);
  };

  return (
    <main>
      <Calendar openModal={handleOpenModal} setModalType={setModalType} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalType === "form" && <Form handleCloseModal={handleCloseModal} />}
        {modalType === "eventDetails" && <EventDetails />}
      </Modal>
    </main>
  );
};

export default CalendarPage;
