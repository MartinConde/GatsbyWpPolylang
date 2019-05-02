process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const HomePageTemplate = path.resolve("./src/templates/HomePage.js")

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
            lang
            translations {
              en
              de
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const Pages = result.data.allWordpressPage.edges
    Pages.forEach(page => {
      createPage({
        path: `${page.node.lang}/${page.node.slug}`,
        component: HomePageTemplate,
        context: {
          id: page.node.wordpress_id,
          slug: page.node.slug,
          lang: page.node.lang,
          detrans: page.node.translations.de,
          entrans: page.node.translations.en
        },
      })
    })
  })
}
