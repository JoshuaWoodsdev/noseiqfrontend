
// src/components/Layout.js
import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <div>
    <h1>jhbvbhjhjb</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
