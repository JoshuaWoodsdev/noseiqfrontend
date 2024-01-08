// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";
import ChoiceComponent from "../components/navComponents/choiceCard";
import styled from 'styled-components';


const CardHolder = styled.div`
  height: 20px;
  text-align:center;
  display: flex;
  height: auto;
  justify-content: center;
  padding-top: 50px
  background-color: blue;
`;

const IndexPage = () => (
  <Layout>
     <CardHolder>
      </CardHolder>
    <ChoiceComponent/>
  </Layout>
);

export default IndexPage;
