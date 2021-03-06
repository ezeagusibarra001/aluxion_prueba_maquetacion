import React from "react";
import { useHome } from "../../context/useContext";
import "../styles/Home.css";
function Product() {
  const { productos } = useHome();
  return (
    <div className="overflow">
      {productos
        //.filter((p) => p.id === id)
        .map((p) => (
          <div key={p.id} id={p.id} className="grilla">
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
    </div>
  );
}

export default Product;
