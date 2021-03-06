import React from "react";
import Layout from "./helpComponents/Layout";
import "./styles/Menu.css";
import sillon from "../assets/sillonblanco.png";
function Menu() {
  const enter = () => {
    document.querySelector(".bellow_list").classList.add("block");
    document.querySelector("#collection").classList.add("collectionAdd");
  };
  const leave = () => {
    document.querySelector(".bellow_list").classList.remove("block");
    document.querySelector("#collection").classList.remove("collectionAdd");
  };

  const enterSillon = () => {
    document.querySelector("#sillon").classList.add("sillonopen");
    document.querySelector("#sillon").classList.remove("sillonclose");
    document.querySelector(".extras1").classList.add("noneVis")
    document.querySelector(".extras2").classList.add("noneVis")
    document.querySelector(".extras3").classList.add("noneVis")
    document.querySelector(".extras1").classList.remove("noneVisOut")
    document.querySelector(".extras2").classList.remove("noneVisOut")
    document.querySelector(".extras3").classList.remove("noneVisOut")
  };
  const leaveSillon = () => {
    document.querySelector("#sillon").classList.remove("sillonopen");
    document.querySelector("#sillon").classList.add("sillonclose");
    document.querySelector(".extras1").classList.remove("noneVis")
    document.querySelector(".extras2").classList.remove("noneVis")
    document.querySelector(".extras3").classList.remove("noneVis")
    document.querySelector(".extras1").classList.add("noneVisOut")
    document.querySelector(".extras2").classList.add("noneVisOut")
    document.querySelector(".extras3").classList.add("noneVisOut")

  };
  return (
    <Layout>
      <div className="grilla_menu">
        <ul className="lista">
          <div onMouseEnter={enter} onMouseLeave={leave} onClick={enter}>
            <li id="collection">Collection</li>
            <ul className="bellow_list">
              <li
                onMouseEnter={enterSillon}
                onMouseLeave={leaveSillon}
                onClick={enterSillon}
              >
                Furniture
              </li>
              <li>Lighting</li>
              <li id="last_one">Accesories</li>
            </ul>
          </div>

          <li className="extras1">Design</li>
          <li className="extras2">Craftmanship</li>
          <li className="extras3">Ethics</li>
        </ul>
        <div id="sillon" className="sillon">
          <img src={sillon} alt="Sillon" />
        </div>
      </div>
      <div className="keep_down">
        <div className="grilla_menu2">
          <div className="group1">
            <p>About</p> <p>Contact</p> <p>Dealers</p>
          </div>
          <div className="group2">
            <p>News</p> <p>Care</p> <p>Press</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
