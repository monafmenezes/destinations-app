import { createContext, useState } from "react";

export const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToData = ({ city, country }) => {
    setData({ city, country });
  };

  return (
    <DataContext.Provider value={{data, addToData}}>
      {children}
    </DataContext.Provider>
  );
};
