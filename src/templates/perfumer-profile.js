// src/templates/perfumer-profile.js

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'; // Your layout component
import styled from 'styled-components';

const PerfumerProfileWrapper = styled.div`
  // Add your styling here...
`;



///update this all later on how to pull from appbackend
const PerfumerProfilePage = ({ pageContext }) => {
  const [perfumer, setPerfumer] = useState(null);

  useEffect(() => {
   
    };

    fetchPerfumerData();
  }, [pageContext.slug]);

  if (!perfumer) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <PerfumerProfileWrapper>
        <h1>{perfumer.name}</h1>
        <img src={perfumer.photo} alt={perfumer.name} />
        <p>About me: {perfumer.aboutMe}</p>
        <p>My brand(s): {perfumer.brands}</p>
        <p>My commercially available perfumes: {perfumer.commercialPerfumes}</p>
        <p>Collaboration process:</p>
        <ul>
          <li>I prefer my name to be mentioned in association with perfumes that I make: {perfumer.mentionName}</li>
          {/* Add more collaboration process details... */}
        </ul>
        <p>Can consult on other areas: {perfumer.consultAreas}</p>
        {/* Add more profile details... */}
        <a href={`mailto:${perfumer.email}`}>Contact me directly</a>
      </PerfumerProfileWrapper>
    </Layout>
  );
};

export default PerfumerProfilePage;
