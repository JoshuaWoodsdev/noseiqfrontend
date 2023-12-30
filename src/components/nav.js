
// src/components/Layout.js
import React from "react";
import SuperMenu from "./navComponents/superMenu";


const NavBar = () => {
return(
    <>
<nav class="sans-serif">
  <a class="link dim bg-blue black b f1 f-headline-ns tl db mb3 mb4-ns" href="#" title="Home">Nose IQ
  </a>
  <div class="tc pb3">
  </div>
  
  <SuperMenu/>
</nav>

    
</>
)
}

 export default NavBar;