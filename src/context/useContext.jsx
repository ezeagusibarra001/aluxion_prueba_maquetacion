// eslint-disable-next-line
import React, { useState, useMemo } from "react";
import silla from '../assets/Sillanegra.png'
import mesa from '../assets/Mesanegra.png'
const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
  const [id, setId] = useState(1);
  const productos = [
    {
      id: 1,
      designer: "Michael W.Dreeben",
      name: "Shell Dining Chair",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: silla
    },
    {
      id: 2,
      designer: "Jeaper K.Thomas",
      name: "Dunes Anthrazite Black",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: mesa
    },
  ];
  // eslint-disable-next-line
  const value = React.useMemo(() => {
    return {
      id,
      setId,
      productos
    };
  });

  return <UsuarioContext.Provider value={value} {...props} />;
}

export function useHome() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
}
