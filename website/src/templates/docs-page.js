/*import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MdContent from "../components/mdcontent"
import Sidebar from "../components/sidebar"

function DocsPage({ data }) {
  const [url, setUrl] = useState("");
  const currentPage = data.markdownRemark
  const allPages = data.allMarkdownRemark
  const styles = {
    main: {
      margin: `0 auto`,
      maxWidth: `1200px`,
      display: `flex`,
    },
    content: {
      color: `black`,
      margin: `0`,
      padding: `20px`,
      overflow: `scroll`
    },
    sidebar: {
      background: `#F7FAFC`,
      height: `100vh`,
      padding: `15px`,
      color: `#63B3ED`,
      position: `sticky`,
      top: `62px`,
    },
    activeLink: {
      color: `#38A169`,
      fontWeight: `700`
    }
  }
  const updateUrl = () => {
    console.log('hello world')
    const currentUrl = window.location.href;
    setUrl(currentUrl);
    console.log(currentUrl);
  }

  return (
    <Layout>
      <SEO title={currentPage.frontmatter.title} />
      <Helmet title={`${currentPage.frontmatter.title}`} />
      <div style={styles.main} onScroll={updateUrl}>

        <div style={styles.content} className="Content">
          <h1>{currentPage.frontmatter.title}</h1>
          <MdContent content={currentPage.html} />
        </div>

        <Sidebar allPages={allPages} type="docs" url={url} />

      </div>
    </Layout>
  )
}

export default DocsPage

export const query = graphql`
  query DocsPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        posttype
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { posttype: { eq: "doc" }}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`
*/
