import React, { createContext, useContext, useState } from "react";

interface MyContextType {
  selectedLink: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

interface MyProviderProps {
  children: React.ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [selectedLink, setSelected] = useState<string>("getstarted");

  return (
    <MyContext.Provider value={{ selectedLink, setSelected }}>
      {children}
    </MyContext.Provider>
  );
};
