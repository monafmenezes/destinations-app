import { createContext, useState } from "react";

export const SearchContext = createContext([]);

export const SearchProvider = ({ children }) => {
  const [searchCities, setSearchCities] = useState([]);
  const [searchCountries, setSearchCountries] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchCities,
        searchCountries,
        setSearchCities,
        setSearchCountries,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
