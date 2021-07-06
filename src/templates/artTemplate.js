import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../styles/gallery.scss"
// import "../styles/12columns.scss"

const ArtTemplate = props => {
    const { pageContext } = props
    const { pageContent, pageTitle } = pageContext

    console.log(pageContext)

    const images = useStaticQuery(graphql`
        query {
            flashlight: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/flash.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            morphology: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/morph.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            caged: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/caged.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            wave: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/wave.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            birth: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/birth.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            sunset: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/sunset.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            snow: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/mountain.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            duality: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/duality.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            thunderclouds: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/thunder.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            arches: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "traditional/arch.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            hill: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "design/hill.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            pros: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "design/pros.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            cup: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "design/cup.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            sketch: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "design/prosketch.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            speaker: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "design/speaker.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            still: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/still.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            flux: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/flux.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            eternal: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/eternal.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            photon: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/bird.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            torus: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/torus.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            sorbet: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/sorbet.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            lover: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/lover.gif"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            voxel: file(sourceInstanceName: {eq: "art"}, relativePath: {eq: "digital/voxel.jpg"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <Layout>
        <SEO title={pageTitle}/>
        
          <section className="gallery">
                  <div><Link to="/art/design">Design</Link></div>
                  <div><Link to="/art/traditional">Traditional</Link></div>        
                  <div><Link to="/art/digital">Digital</Link></div>
  
              <main className="gallery-container">
                  <div className="grid">
                  {pageContent.map((data, index) => (
  
                      <div className={data.item.column} key={`content_item_${index}`}>
                          <figure className="img-container">
                              <a href={`#${data.item.id}`}>
                                  {/* <img className="red" src={data.item.path} /> */}
                                  <div className="red">
                                    <StaticImage fluid={images[data.item.id].childImageSharp} style={{position: "inherit"}} />
                                  </div>
                              </a>
                              <a href="#" className="lightbox" id={data.item.id}>
                                  <img src={data.item.path} alt={data.item.id} />
                              </a>
                              <div className="content-details">
                                  <div className="content-title">{data.item.title}</div>
                                  <div className="content-text">{data.item.medium}</div>
                              </div>
                          </figure>
                      </div>
  
                  ))}
                  </div>
              </main>
          </section>
        
        </Layout>
    )
}
  
export default ArtTemplate
