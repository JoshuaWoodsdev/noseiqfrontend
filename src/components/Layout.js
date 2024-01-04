
// src/components/Layout.js
import React from "react";
import NavBar from "./nav";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;
