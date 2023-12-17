const { GatsbyConfig } = require("gatsby");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = {
  siteMetadata: {
    title: `clerk-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // Add Gatsby plugin
  plugins: [
    {
      resolve: `gatsby-plugin-clerk`,
      options: {
        // Add your Clerk `publishableKey` here
        publishableKey: 'pk_test_Z3VpZGVkLWNvdWdhci0yOC5jbGVyay5hY2NvdW50cy5kZXYk',
      },
    },
  ],
};

module.exports = config;
