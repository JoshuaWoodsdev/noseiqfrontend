// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the Home Page</h1>

    <p>
      Discover the world of perfumers and the art of fragrance creation. From
      iconic scents to innovative blends, explore the stories behind your
      favorite perfumes and the talented individuals who craft them.
    </p>

    <h2>Featured Perfumers</h2>
    <ul>
      <li>
        <strong>John Doe</strong> - Known for timeless classics that captivate
        the senses.
      </li>
      <li>
        <strong>Jane Smith</strong> - A rising star in the perfume industry,
        pushing boundaries with unique and bold creations.
      </li>
    </ul>

    <p>
      Whether you're a fragrance enthusiast or just getting started, join us on
      a journey through the fascinating world of perfumery.
    </p>
  </Layout>
);

export default IndexPage;
