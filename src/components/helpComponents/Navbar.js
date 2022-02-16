import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  /*const open = () => {
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
  };*/
  if (window.location.href.includes("menu")) {
    return (
      <div className="wrapper">
        <p className="text_p open_text">mater</p>

        <div id="hamburger">
        <Link to="/">
            <button className="open">
              <span className="top-line open_span"></span>
              <span className="middle-line open_span"></span>
              <span className="bottom-line open_span"></span>
            </button>
          </Link>
        </div>
      </div>
    );
  }else{
    return (
      <div className="wrapper">
        <p className="text_p">mater</p>

        <div id="hamburger">
          <Link to="/menu">
            <button>
              <span className="top-line"></span>
              <span className="middle-line"></span>
              <span className="bottom-line"></span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
