module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio_v2",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
