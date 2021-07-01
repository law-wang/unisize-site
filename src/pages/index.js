import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Tracklist from "../components/tracklist"

// import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="index-roll">

        {/* <Tracklist /> */}

        <h2>For Fun</h2>
        <h4><a href="https://thoughts.rence.la/">Thoughts</a></h4>
        <p className="project-description">&#8593; logging everyday thoughts</p>
        <h4><a href="https://inmydefense.glitch.me/">In My Defense</a></h4>

        <h2>Letters of Recommendation</h2>
        <div><a href="https://youtu.be/iVQhkDZS_Tk" target="_blank" rel="noopener noreferrer">a dream</a></div>
        <div><a href="https://youtu.be/kBF5l9rWQFs" target="_blank" rel="noopener noreferrer">a lesson on child-rearing</a></div>
        <div><a href="https://www.vogue.com/fashion-shows/fall-2005-couture/christian-dior/slideshow/collection#11" target="_blank" rel="noopener noreferrer">Dior without Maria Grazia</a></div>
        <div><a href="https://youtu.be/HUMygkRhB88" target="_blank" rel="noopener noreferrer">ASMR</a></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
