import React from "react";
import Layout from "./helpComponents/Layout";
import "./styles/Home.css";
import silla from "../assets/Sillanegra.png";
import MenuX from "./helpComponents/MenuX";
function Home() {
  return (
    <Layout>
      <div className="grilla">
        <div className="box_left">
          <p className="p_text">Michael W.Dreeben</p>
          <h2 className="h2_text">Shell Dining Chair</h2>
          <p className="p_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="button_detail">Product Details</button>
        </div>
        <div className="box_right">
          <img src={silla} alt="Imagen" className="imagen" />
        </div>
      </div>
      <MenuX/>
    </Layout>
  );
}

export default Home;
