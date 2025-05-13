/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const path = require('path');

module.exports = {
  // Prefixo para o GitHub Pages (coloque o nome do seu repositório aqui)
  pathPrefix: `/m2a-compras`,

  // Plugins do Gatsby
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // Configura o diretório de imagens para o GraphQL
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Configura o manifest para Progressive Web App
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `m2a-compras`,
        short_name: `m2a`,
        start_url: `/m2a-compras/`, // Caminho base para funcionar no GitHub Pages
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Caminho relativo ao root do projeto
      },
    },
    {
      // Configura os aliases para imports simplificados
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@images': path.join(__dirname, 'src/images'),
      },
    },
    // Suporte para caminhos relativos no TypeScript
    'gatsby-plugin-tsconfig-paths',
  ],
};
