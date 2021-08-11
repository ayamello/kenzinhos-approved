import { createContext, useContext, useEffect, useState } from "react";

export const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let testToken = JSON.parse(localStorage.getItem("@Kenzinho:token"));

    setToken(testToken);
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
