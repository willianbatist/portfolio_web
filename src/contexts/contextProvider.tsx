"use client"
import React, { createContext, useState } from "react";




interface AppContextInterface {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

const AppProvider = ({ children }: Props) => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const context = {
    menuIsVisible,
    setMenuIsVisible
  }
  

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;