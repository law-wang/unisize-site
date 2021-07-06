import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtTemplate = props => {
    const { pageContext } = props
    const { pageContent, pageTitle } = pageContext

    const imageQuery = useStaticQuery(graphql`
        query {
            images: allFile(filter: { sourceInstanceName: { eq: "traditional" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `)

    const images = []
    imageQuery.images.edges.map((data, index) => (
        images.push(getImage(data.node))
    ))

    console.log(imageQuery)
    console.log(images)
    console.log(images[0])

    return (
        <Layout>
        <SEO title={pageTitle}/>
        
          <section className="gallery">
                  <div><Link to="/art/design">Design</Link></div>
                  <div><Link to="/art/traditional">Traditional</Link></div>        
                  <div><Link to="/art/digital">Digital</Link></div>
  
              <main className="gallery-container">
                  {images.map((data, index) => (
                      
                    <div key={index}>
                        <GatsbyImage image={data} alt="" />
                    </div>
  
                  ))}
              </main>
          </section>
        
        </Layout>
    )
}
  
export default ArtTemplate