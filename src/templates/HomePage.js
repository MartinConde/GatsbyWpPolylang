import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'


export default props => {
  const page = props.data.wordpressPage

  return (
    <Layout>
      <h1>{page.title}</h1>
      <p>Lang: {page.lang}</p>
      <p>German translation ID:{page.translations.de}</p>
      <p>English translation ID:{page.translations.en}</p>
      <p>Spanish translation ID:{page.translations.es}</p>
     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      slug
      title
      lang
      translations {
        en
        de
        es
      }
    }
  }
`
