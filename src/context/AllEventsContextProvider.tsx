import { createContext, useEffect, useState } from "react";
import { EventData, getAllEvents } from "../services/event-services";

interface AllEventsContextType {
  //dataForChildren: any;
  allEvents: EventData[] | null;
  createdEvents: number | null;
  setCreatedEvents: any;
}

export const AllEventsContext = createContext<AllEventsContextType | null>(
  null
);

const AllEventsContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState<EventData[] | null>(null);
  const [createdEvents, setCreatedEvents] = useState<number | null>(0);

  useEffect(() => {
    getAllEvents()
      .then((response) => {
        console.log(response);
        setAllEvents(response);
        console.log(createdEvents, "from Context");
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [createdEvents]);

  const dataForChildren = {
    allEvents,
    createdEvents,
    setCreatedEvents,
  };

  return (
    <AllEventsContext.Provider value={dataForChildren}>
      {children}
    </AllEventsContext.Provider>
  );
};

export default AllEventsContextProvider;
