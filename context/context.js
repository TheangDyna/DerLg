import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState("");
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default Context;
