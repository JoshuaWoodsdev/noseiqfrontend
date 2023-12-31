// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";
import { useUser } from "@clerk/clerk-react";

const WelcomePage = () => (
      const { isSignedIn, user, isLoaded } = useUser();
    
    return(
  <Layout>
   <h1>Wecome page after SignIn</h1>
   
  </Layout>
    )
);

export default WelcomePage;



 
export default function Home() {

 
  if (!isLoaded) {
    return null;
  }
 
  if (isSignedIn) {
    return <div>Hello {user.fullName}!</div>;
  }
 
  return <div>Not signed in</div>;
}
 