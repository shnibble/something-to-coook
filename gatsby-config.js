module.exports = {
  siteMetadata: {
    title: `Something to Cook`,
    description: `A single-page webapp that helps cooks decide on a meal to prepare.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Something to Cook`,
        short_name: `STC`,
        start_url: `/`,
        background_color: `#f88000`,
        theme_color: `#f88000`,
        display: `minimal-ui`,
        icon: `src/images/logo-dark.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-apiserver`,
        options: {
            typePrefix: `stc__`,
            url: `https://api.somethingtocook.com/meta/times`,
            method: `get`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {},
            name: `preptimes`,
        }
    },
    {
        resolve: `gatsby-source-apiserver`,
        options: {
            typePrefix: `stc__`,
            url: `https://api.somethingtocook.com/meta/categories`,
            method: `get`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {},
            name: `categories`,
        }
    },
    {
        resolve: `gatsby-source-apiserver`,
        options: {
            typePrefix: `stc__`,
            url: `https://api.somethingtocook.com/meta/tags`,
            method: `get`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {},
            name: `tags`,
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
