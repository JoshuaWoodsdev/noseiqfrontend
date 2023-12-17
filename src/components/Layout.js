
// src/components/Layout.js
import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <div>
    <h1>jhbvbhjhjb</h1>
    <header className="bg-white w-100 ph3 pv3 pv4-ns ph4-m ph5-l" style={{ zIndex: 100 }}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
  </nav>
</header>

   
    <main>{children}</main>
  </div>
);

export default Layout;
