import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const cardHolderContainer = styled.CardHolder`
  width: 20rem;
  margin: 0 auto;
  background-color: blue;
  border-radius: 0.25rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
`;



const CardHolder = ({ data }) => {
