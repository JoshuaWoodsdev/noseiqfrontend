// src/components/NavBar.js
import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
    return (
        <nav class="db dt-l w-100 border-box pa3 ph5-l">
            <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name" />
            </a>
            <div className="dtc v-mid tr pa3">
          <Link to="/" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Home">Home</Link>
          <Link to="/how-it-works" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="How it Works">How it Works</Link>
          <Link to="/blog" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Blog">Blog</Link>
          <Link to="/press" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Press">Press</Link>
          <Link to="/contact" className="link dim dark-gray f6 f5-l dib" title="Contact">Contact</Link>
        </div>
        </nav>
    );
};

export default NavBar;
