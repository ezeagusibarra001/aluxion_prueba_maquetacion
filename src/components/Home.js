import React from "react";
import Layout from "./helpComponents/Layout";
import "./styles/Home.css";
import MenuX from "./helpComponents/MenuX";
import { useHome } from "../context/useContext";
function Home() {
  const { productos, id } = useHome();
  return (
    <Layout>
      {productos.filter(p => p.id === id).map((p) => (
        <div className="grilla" key={p.id}>
          <div className="box_left">
            <p className="p_text">{p.designer}</p>
            <h2 className="h2_text">{p.name}</h2>
            <p className="p_description">{p.description}</p>
            <button className="button_detail">Product Details</button>
          </div>
          <div className="box_right">
            <img src={p.image} alt="Imagen" className="imagen" />
          </div>
        </div>
      ))}

      <MenuX />
    </Layout>
  );
}

export default Home;
