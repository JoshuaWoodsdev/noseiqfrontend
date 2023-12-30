const { GatsbyConfig } = require("gatsby");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = {
  siteMetadata: {
    title: `clerk-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // Add Gatsby plugins
  plugins: [
    {
      resolve: `gatsby-plugin-clerk`,
      options: {
        // Add your Clerk `publishableKey` here
        publishableKey: 'pk_test_Z3VpZGVkLWNvdWdhci0yOC5jbGVyay5hY2NvdW50cy5kZXYk',
      },
    },
  /* {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'cegk3et9',
        dataset: 'production',
      },*/
  ],
};

module.exports = config;
