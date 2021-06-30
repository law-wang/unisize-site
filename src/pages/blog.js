import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../styles/bloggrid.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query BlogNavigationQuery {
        allMarkdownRemark (
            filter: { frontmatter: { type: {eq: "post"}, published: {eq: true} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            category:group(field: frontmatter___category) {
                fieldValue
                edges {
                    node {
                        frontmatter {
                            title
                            permalink
                        }
                        id
                    }
                }
            }
        }
    }`)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blogcategorylist">

        {data.allMarkdownRemark.category.slice(0).reverse().map((category, index) => (

          <div className="category" key={index}>
            <h2>{category.fieldValue}</h2>

            {category.edges.map(post => (
              <h4 key={post.node.id}>
                <Link to={post.node.frontmatter.permalink}>{post.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
              </h4>
            ))}

          </div>

        ))}

      </div>

    </Layout>
  )
}

export default BlogPage
