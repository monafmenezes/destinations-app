import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const DestinationsContext = createContext([]);

export const DestinationsProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);

  const loadData = (type) => {
    api
      .get(`/${type}`)
      .then((response) => {
        if (type === "country") {
          setCountries(response.data);
        } else {
          setCity(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData("country");
    loadData("city");
  }, []);

  return (
    <DestinationsContext.Provider value={{ countries, city }}>
      {children}
    </DestinationsContext.Provider>
  );
};
