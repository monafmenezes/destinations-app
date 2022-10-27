import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addToUser = ({ name, email, phone, CPF }) => {
    setUser({ name, email, phone, CPF });
  };

  return (
    <UserContext.Provider value={(user, addToUser)}>
      {children}
    </UserContext.Provider>
  );
};
