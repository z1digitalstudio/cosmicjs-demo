const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ["blog-posts", "pages"],
        apiAccess: {
          read_key: process.env.READ_API_KEY
        }
      }
    }
  ]
};
