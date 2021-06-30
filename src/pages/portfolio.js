import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ProjectFeatured from "../components/projectfeatured"

// import "../styles/projectgrid.scss"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
  query ProjectNavigationQuery {
      allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "project"}, published: {eq: true}, casestudy: {eq: true} } }
          sort: { fields: [frontmatter___updated] order: DESC }
      ) {
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
  }`)

  return (
    <Layout>
      <SEO title="Project" />

      {/* <h2>Details</h2>
      <div className="projectside-post-info">
        <h5 className="time">Timeframe:</h5> <h6 className="timeinput">{timeframe}</h6>
        <h5 className="tools">Tools:</h5> <h6 className="timeinput">{tools}</h6>
      </div> */}

      <div className="projectside-post-nav">
        <h2>Case Studies</h2>
        {data.allMarkdownRemark.edges.map((project, index) => (
          <h4 key={index}>
            <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
          </h4>
        ))}
      </div>

      <h2>Projects</h2>
      <h4><a href="https://spotlist.netlify.app/" target="_blank" rel="noopener noreferrer">Spotlist</a></h4>
      <p className="project-description">&#8593; react app to get information about any spotify playlist</p>
      <h4><a href="https://chrome.google.com/webstore/detail/breathe-minimalist-new-ta/ngcbnnpkcfomilobdpffbkcabmehjnbm" target="_blank" rel="noopener noreferrer">Breathe</a></h4>
      <p className="project-description">&#8593; minimalist New Tab browser extension for meditation</p>


    </Layout>
  )
}

export default ProjectPage
