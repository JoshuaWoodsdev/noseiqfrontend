// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";
import SignInPage from "../components/AuthComponent";

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the Home Page</h1>
     <SignInPage/>
  </Layout>
);

export default IndexPage;
