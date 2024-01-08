// src/components/Layout.js
import React from "react";
import NavBar from "./nav";

import '@fontsource/plus-jakarta-sans/200.css';
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/open-sauce-sans/400.css';
import '@fontsource/open-sauce-sans/500.css';
import '@fontsource/open-sauce-sans/600.css';
import '@fontsource/open-sauce-sans/700.css';
import '@fontsource/open-sauce-sans/800.css';
import '@fontsource/open-sauce-sans/900.css';
import Footer from "./navComponents/footer";


const SecondLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className ="secondmain">{children}</div>
      <Footer/>
    </div>
  );
};

export default SecondLayout;
