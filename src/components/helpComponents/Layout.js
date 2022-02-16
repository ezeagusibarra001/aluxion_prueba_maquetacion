import React from "react";
import Navbar from "./Navbar";
import "../styles/Layout.css";
function Layout(props) {
  if (window.location.href.includes("menu")) {
    return (
      <div id="web_app" className="app open">
        <Navbar />
        {props.children}
      </div>
    );
  }
  if (window.location.href.includes("home")) {
    return (
      <div id="web_app" className="app">
        <Navbar />
        {props.children}
      </div>
    );
  }
}

export default Layout;
