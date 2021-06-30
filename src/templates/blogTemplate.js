import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from "../components/blogpostmodule"

// import "../styles/bloggrid.scss"

const BlogPostTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, permalink, tag, category },
        excerpt: autoExcerpt,
        id,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    return (
        <Layout>
          <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <div className="bloggrid-content-post">
            <Post
                key={id}
                title={title}
                date={updated}
                path={permalink}
                // coverImage={coverImage}
                html={html}
                tag={tag}
                category={category}
                previousPost={previous}
                nextPost={next}
            />
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const postQuery = graphql `
    query BlogPostQuery ($path: String) {
        markdownRemark(frontmatter: { permalink: { eq: $path } }) {
            frontmatter {
                title
                updated(formatString: "MMMM DD[,] YYYY")
                tag
                category
                permalink
            }
            id
            html
            excerpt
        }
    }
`
