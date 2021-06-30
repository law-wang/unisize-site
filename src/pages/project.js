import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ProjectFeatured from "../components/projectfeatured"

// import "../styles/projectgrid.scss"

const ProjectPage = ({data}) => (
  <Layout>
    <SEO title="Project" />
  
      <h2>Projects</h2>
        <h4><a href="https://spotlist.netlify.app/" target="_blank" rel="noopener noreferrer">Spotlist</a></h4>
        <p className="project-description">&#8593; react app to get information about any spotify playlist</p>
        <h4><a href="https://chrome.google.com/webstore/detail/breathe-minimalist-new-ta/ngcbnnpkcfomilobdpffbkcabmehjnbm" target="_blank" rel="noopener noreferrer">Breathe</a></h4>
        <p className="project-description">&#8593; minimalist New Tab browser extension for meditation</p>

    
  </Layout>
)

export default ProjectPage

export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
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
  }
`
