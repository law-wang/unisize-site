import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

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

            <article className="project">
                <div className="projectarea">
                    <div className="projectheading">
                        <div className="projecttitle">{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                    </div>

                    <div className="projectcontent">
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
                <div className="projectlinkto">
                    <a href={link} target="_blank" rel="noreferrer">See It in Action</a>
                </div>
            </article>

        </Layout>
    )
}

export default ProjectPostTemplate

export const postQuery = graphql`
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
