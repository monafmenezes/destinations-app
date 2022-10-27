import { createContext, useState } from "react";

export const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const addToData = (item) => {
    setData([...setData]);
  };

  return (
    <DataContext.Provider value={(data, addToData)}>
      {children}
    </DataContext.Provider>
  );
};
