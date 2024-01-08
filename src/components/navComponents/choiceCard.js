import React from "react"
import styled from 'styled-components';

const ArticleContainer = styled.article`
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0fff0; /* Washed green background */
  border-radius: 0.25rem;
  color: black;
  margin-bottom: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  font-size: 0.875rem;
  border-radius: 1rem;
  background-color: #006400; /* Dark green background */
  color: #f0fff0; /* Washed green text */
  text-decoration: none;
  border: 1px solid #006400; /* Dark green border */
  padding: 0.5rem 1rem;
  margin-right: 0.75rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #008000; /* Lighter green on hover */
  }
`;


const ChoiceComponent =() =>{
return(
<ArticleContainer>
    <Title>A marketplace for perfumers and brands. </Title>
    <Subtitle>Get started with us as a perfumer, brand or retailer.</Subtitle>
    <Description>Sign up for beta access or learn more about x.</Description>
    <ButtonGroup>
        <Button href="#">Sign In</Button>
        <Button href="#">Sign Up</Button>
    </ButtonGroup>
</ArticleContainer>
)};

export default ChoiceComponent;