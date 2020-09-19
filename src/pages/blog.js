import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

export default function Blog() {
  const content = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {content.allContentfulBlogPost.edges.map(edge => {
          let slug = edge.node.slug
          let blogPath = `/blog/${slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={blogPath}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

// const data = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `)

{
  /* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          let slug = edge.node.fields.slug
          let blogPath = `/blog/${slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={blogPath}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol> */
}
