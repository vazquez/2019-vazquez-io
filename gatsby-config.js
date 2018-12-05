module.exports = {
  siteMetadata: {
    title: 'Design+Code',
    description: 'Learning Design',
    keywords: 'react, react for designers, design, ricardo vazquez',
  },
  plugins: [ 
    'gatsby-plugin-sass',
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
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '5djlojkrf331',
        accessToken: '27b4157175899fb7e04fd603cba00369f98747adac0d94234386ddb6a9c9ae02',
      },
    },
  ],
}
