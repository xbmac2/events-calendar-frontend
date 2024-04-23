// import { useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";
import AllEventsContextProvider from "./context/AllEventsContextProvider";
// import Calendar from "./containers/Calendar/Calendar";
// import Modal from "./components/Modal/Modal";
import SelectedDateContextProvider from "./context/SelectedDateContextProvider";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

function App() {
  // const [isModalOpen, setModalOpen] = useState<boolean>(false);
  // const { setSelectedDate } = useContext(SelectedDateContext);

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };
  // const handleOpenModal = (clickedDate) => {
  //   //console.log("handle open modal");
  //   setModalOpen(true);
  //   console.log(clickedDate);
  // };
  return (
    <SelectedDateContextProvider>
      <AllEventsContextProvider>
        {/* <Calendar openModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
        <CalendarPage />
      </AllEventsContextProvider>
    </SelectedDateContextProvider>
  );
}

export default App;
