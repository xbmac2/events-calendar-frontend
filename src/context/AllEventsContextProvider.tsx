import { createContext, useEffect, useState } from "react";
import { EventData, getAllEvents } from "../services/event-services";

interface AllEventsContextType {
  //dataForChildren: any;
  allEvents: EventData[] | null;
}

export const AllEventsContext = createContext<AllEventsContextType | null>(
  null
);

const AllEventsContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState<EventData[] | null>(null);

  useEffect(() => {
    getAllEvents()
      .then((response) => {
        console.log(response);
        setAllEvents(response);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const dataForChildren = {
    allEvents,
  };

  return (
    <AllEventsContext.Provider value={dataForChildren}>
      {children}
    </AllEventsContext.Provider>
  );
};

export default AllEventsContextProvider;
