import { createContext, useState } from "react";

interface SelectedDateContextType {
  //dataForChildren: any;
  selectedDate: any;
  setSelectedDate: any;
}

export const SelectedDateContext =
  createContext<SelectedDateContextType | null>(null);

const SelectedDateContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dataForChildren = {
    selectedDate,
    setSelectedDate,
  };

  return (
    <SelectedDateContext.Provider value={dataForChildren}>
      {children}
    </SelectedDateContext.Provider>
  );
};

export default SelectedDateContextProvider;
