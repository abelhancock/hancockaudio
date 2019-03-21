const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Abel Hancock | Musician, Composer`,
    description: `Abel Hancock`,
    author: `Abel Hancock`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    {
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
    },
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/images`,
				name: 'images',
			},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hancockaudio`,
        start_url: `/`,
        background_color: `#ECE2D4`,
        theme_color: `#ECE2D4`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        static: path.join(__dirname, 'static'),
        images: path.join(__dirname, 'static/images'),
        
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles')
      }
    }
  ],
};