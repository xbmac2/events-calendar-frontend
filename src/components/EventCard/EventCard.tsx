import { useContext, useEffect } from "react";
import styles from "./EventCard.module.scss";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";
const EventCard = ({
  setModalType,
  openModal,
  clickedDate,
  currentEvent,
}: any) => {
  const { setEventViewing } = useContext(SelectedDateContext);

  const handleClick = (event) => {
    event.stopPropagation();
    setModalType("eventDetails");
    openModal(clickedDate);
    setEventViewing(currentEvent);
  };

  // useEffect(() => {

  // }, []);

  return (
    <div className={styles.card} onClick={handleClick}>
      <p>Event</p>
    </div>
  );
};

export default EventCard;
