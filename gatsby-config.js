module.exports = {
  siteMetadata: {
    title: 'Eduardo Mejía Website',
    author: 'Eduardo Mejía',
    handle: '@eduarmreyes',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.js')],
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Eduardo Mejía Website',
        short_name: 'eduarmreyes_website',
        start_url: '/',
        background_color: '#2779bd',
        theme_color: '#2779bd',
        display: 'minimal-ui',
        icon: 'src/images/me-logo.jpg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47847165-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Use anonymizeIP for GA
        // This is optional
        anonymize: true,
        // Respect "Do Not Track" for visitors that have enabled it
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
