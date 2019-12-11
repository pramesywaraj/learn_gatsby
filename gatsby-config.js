module.exports = {
  siteMetadata: {
    title: `Panalar's Site :D`,
    description: `This is Pramesywara Jembar Panalar's site`,
    author: `Pramesywara Jembar Panalar`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
