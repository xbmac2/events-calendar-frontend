import { useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Calendar from "../../containers/Calendar/Calendar";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";

const CalendarPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { setSelectedDate } = useContext(SelectedDateContext);

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
      <Calendar openModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default CalendarPage;
