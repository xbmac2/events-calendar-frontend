import { useContext } from "react";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";

const EventDetails = () => {
  const { eventViewing } = useContext(SelectedDateContext);
  const { event, startDate, endDate } = eventViewing;
  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);
  return (
    <article>
      <h2>Event details</h2>
      <p>{event}</p>
      <p>Starting: {formattedStartDate.toString().substring(0, 15)}</p>
      <p>Ending: {formattedEndDate.toString().substring(0, 15)}</p>
    </article>
  );
};

export default EventDetails;
