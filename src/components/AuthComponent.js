import React from "react";
import { SignIn } from "gatsby-plugin-clerk";
import "tachyons/css/tachyons.min.css"; // Import Tachyons CSS

export default function SignInPage() {
  return (
    <div className="mw6 center bg-blue pa3 bg-white br3">
      {/* Tachyons classes: mw6 (max-width), center (centered), pa3 (padding), bg-white (background color), br3 (border radius) */}
      <h1 className="f3 mb3">Sign In Up route</h1>
      <SignIn routing={"path"} path={"/sign-in"} />
    </div>
  );
}
