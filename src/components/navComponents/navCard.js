import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ArticleContainer = styled.article`
  width: 20rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const HorizontalRule = styled.hr`
  width: 2rem;
  border: 1px solid #ccc;
  margin: 1rem auto;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  text-align: center;
  font-size: 0.875rem;
  color: #333;
`;

const StyledArticle = ({ data }) => {
  const [articleData, setArticleData] = useState(data);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Simulating a fetch request delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Replace this with your actual data fetching logic
        const newData = {
          image: "http://example.com/image.jpg",
          title: "Mimi Whitehouse",
          content: "Quite affectionate and outgoing. She loves to get chin scratches and will roll around on the floor waiting for you to give her more of them."
        };

        setArticleData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData once after the initial render
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <ArticleContainer>
      <div className="tc">
        <Title>dasda</Title>
        <HorizontalRule />
      </div>
      <Paragraph>adasd</Paragraph>
    </ArticleContainer>
  );
};

export default StyledArticle;
