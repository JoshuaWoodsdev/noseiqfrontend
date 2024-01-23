import React from "react";
import styled from 'styled-components'; // Importing styled from styled-components
import SecondLayout from "../components/SecondLayout";

const Title = styled.h1`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin: 20px 0; // Add some margin for visual separation
`;

const IndexPage = () => (
  <SecondLayout>
    <Title>GET STARTED AS A PERFUMER</Title>
    <Title>Get started as a fragrance brand</Title>
    <Title>Get started as a retailer</Title> {/* Corrected the typo in 'retailer' */}
  </SecondLayout>
);

export default IndexPage;
