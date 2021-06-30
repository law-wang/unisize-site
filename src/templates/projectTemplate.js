import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from "../components/projectpostmodule"

// import "../styles/projectgrid.scss"

const ProjectPostTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, permalink, timeframe, tools, coverimage, link },
        excerpt: autoExcerpt,
        id,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    return (
        <Layout>
          <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <div className="projectgrid">
                <div className="projectgrid-content">
                    <Post
                        key={id}
                        title={title}
                        date={updated}
                        path={permalink}
                        coverimage={coverimage.absolutePath}
                        html={html}
                        link={link} 
                    />
                </div>
            </div>
        </Layout>
    )
}

export default ProjectPostTemplate

export const postQuery = graphql `
    query ProjectPostQuery ($path: String) {
        markdownRemark(frontmatter: { permalink: { eq: $path } }) {
            frontmatter {
                title
                updated(formatString: "MMMM DD[,] YYYY")
                permalink
                timeframe
                tools
                link
                coverimage
            }
            id
            html
            excerpt
        }
    }
`
