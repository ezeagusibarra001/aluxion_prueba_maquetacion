import React from "react";
import "../styles/Navbar.css";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const open = () => {
    var nav = document.querySelector("#hamburger button");
    var app = document.querySelector("#web_app");
    var top = document.querySelector(".top-line");
    var middle = document.querySelector(".middle-line");
    var bottom = document.querySelector(".bottom-line");
    var text = document.querySelector(".text_p");
    nav.classList.toggle("open");
    app.classList.toggle("open");
    top.classList.toggle("open_span");
    middle.classList.toggle("open_span");
    bottom.classList.toggle("open_span");
    text.classList.toggle("open_text");
  };
  return (
    <div className="wrapper">
      <p className="text_p">mater</p>
      <div id="hamburger">
        <Link to="/menu">
          <button onClick={open}>
            <span className="top-line"></span>
            <span className="middle-line"></span>
            <span className="bottom-line"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
