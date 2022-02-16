import React, { useState } from "react";
const HomeContext = React.createContext();
export function HomeProvider(props) {
  const {location, setLocation} = useState("")
  //DECLARO QUIEN ES EL CONTEXT
  const value = {
    location
  };
  return <HomeContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useHome() {
  const context = React.useContext(HomeContext);
  if (!context) {
    throw new Error("Something wrong have happended");
  }
  return context;
}
