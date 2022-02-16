import React from 'react'
import Navbar from './Navbar'
import "../styles/Layout.css";
function Layout(props) {
  return (
    <div id="web_app" className="app">
        <Navbar/>
        {props.children}
    </div>
  )
}

export default Layout