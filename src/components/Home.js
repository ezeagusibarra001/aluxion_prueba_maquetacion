import React from "react";
import Layout from "./helpComponents/Layout";
import './styles/Home.css'
function Home() {
  return (
    <Layout>
      <div>
        <div>
          <p>Michael W.Dreeben</p>
          <h2>Shell Dining Chair</h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <button>Product Details</button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
