import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const DestinationsContext = createContext([]);

export const DestinationsProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const loadData = (type) => {
    api
      .get(`/${type}`)
      .then((response) => {
        if (type === "country") {
          setCountries(response.data);
        } else {
          setCities(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData("country");
    loadData("city");
  }, []);

  return (
    <DestinationsContext.Provider value={{ countries, cities }}>
      {children}
    </DestinationsContext.Provider>
  );
};
