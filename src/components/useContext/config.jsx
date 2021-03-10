import { createContext, useState } from "react";

const Context = createContext({});

export function TestContextProvider({ children }) {
  const [message, setMessage] = useState("Mensaje inicial");

  return (
    <Context.Provider value={{ message, setMessage }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
