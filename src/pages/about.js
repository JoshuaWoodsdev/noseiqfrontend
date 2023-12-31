// src/pages/about.js
import React from "react";
import Layout from "../components/Layout";
import { SignInButton } from "gatsby-plugin-clerk";
import {
  SignIn,
  SignedIn,
  RedirectToSignIn,
  SignedOut,
  UserButton
  } from 'gatsby-plugin-clerk'
  
const AboutPage = () => (
  <Layout>
     <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
  </Layout>
);

export default AboutPage;
