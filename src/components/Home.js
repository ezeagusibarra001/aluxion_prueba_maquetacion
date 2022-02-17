import React from "react";
import Layout from "./helpComponents/Layout";
import "./styles/Home.css";
import MenuX from "./helpComponents/MenuX";
import Product from "./helpComponents/Product";
function Home() {
  return (
    <Layout>
      <Product/>
      <MenuX />
    </Layout>
  );
}

export default Home;
