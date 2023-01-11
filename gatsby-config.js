/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `trouble`,
    body: {
      content: 'Just some SEO content',
    },
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js"
              }
            } 
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Troubleshooting`,
              short_name: `Troubleshooting`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: "src/images/icon.png"
            },
          },
          `gatsby-plugin-offline`
        ]
      }
    }
  ]
};
