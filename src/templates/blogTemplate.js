import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const BlogTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, permalink, tag, category },
        excerpt: autoExcerpt,
        id,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    
    let postNavigation
    if (previous==null) {
        postNavigation = <Link to={next.frontmatter.permalink}>{next.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link>
    } else if (next==null) {
        postNavigation = <Link to={previous.frontmatter.permalink}>&laquo; {previous.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
    } else {
        postNavigation = <div><Link to={previous.frontmatter.permalink}>&laquo; {previous.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link> <Link to={next.frontmatter.permalink}>{next.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link></div>
    }

    return (
        <Layout>
          <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />
            
            <article className="post">
                <h1>{title.replace("&#58;", ":").replace("&amp;", "&")}</h1>
                <span>{updated}</span>
                <span> in </span>
                <span>{category}</span>

                <div className="postcontent">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>

                <div className="postnavigation">
                    {postNavigation}
                </div>
            </article>

        </Layout>
    )
}

export default BlogTemplate

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
