
// src/components/Layout.js
import React from "react";
import NavBar from "./nav";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <header className="bg-white w-100 ph3 pv3 pv4-ns ph4-m ph5-l" >
   <h1>sdfsdf</h1>
    </header>
    
    <main class="bg-blue w-70">{children}</main>
  </div>
);

export default Layout;
