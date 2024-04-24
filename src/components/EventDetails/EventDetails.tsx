import { useContext } from "react";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const EventDetails = () => {
  const { eventViewing } = useContext(SelectedDateContext);
  const { event, startDate, endDate } = eventViewing;
  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);

  const startDateStr = startDate.substring(0, 19);
  return (
    <article>
      <h2>Event details</h2>
      {/* <h2>{startDateStr}</h2> */}

      <p>{event}</p>
      <CountdownTimer eventDate={formattedStartDate} />
      <p>Starting: {formattedStartDate.toString().substring(0, 15)}</p>
      <p>Ending: {formattedEndDate.toString().substring(0, 15)}</p>
    </article>
  );
};

export default EventDetails;
