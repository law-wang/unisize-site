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
            flashlight: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/flash.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            morphology: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/morph.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            caged: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/caged.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wave: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/wave.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            birth: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/birth.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sunset: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/sunset.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            snow: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/mountain.jpg"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            duality: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/duality.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            thunderclouds: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/thunder.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            arches: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/arch.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hill: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/design/hill.jpg"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pros: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/design/pros.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cup: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/design/cup.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sketch: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/design/prosketch.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            speaker: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/design/speaker.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            still: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/still.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            flux: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/flux.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eternal: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/eternal.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            photon: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/bird.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            torus: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/torus.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sorbet: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/sorbet.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lover: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/lover.gif"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            voxel: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/digital/voxel.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
        <SEO title={pageTitle}/>
        
        <div className="content">
          <section className="gallery">
              <div className="gallery-navigation bgcolor-changer">
                  <div><Link to="/art/design">Design</Link></div>
                  <div><Link to="/art/traditional">Traditional</Link></div>        
                  <div><Link to="/art/digital">Digital</Link></div>        
              </div>
  
              <main className="gallery-container">
                  <div className="grid">
                  {pageContent.map((data, index) => (
  
                      <div className={data.item.column} key={`content_item_${index}`}>
                          <figure className="img-container">
                              <a href={`#${data.item.id}`}>
                                  {/* <img className="red" src={data.item.path} /> */}
                                  <div className="red">
                                    <StaticImage fluid={images[data.item.id].childImageSharp.fluid} style={{position: "inherit"}} />
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
        </div>
        
        </Layout>
    )
}
  
export default ArtTemplate
