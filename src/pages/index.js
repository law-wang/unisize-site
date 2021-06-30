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
            hello
            {/* <Tracklist /> */}

            <h2>For Fun</h2>
              <h4><a href="https://thoughts.rence.la/">Thoughts</a></h4>
              <p className="project-description">&#8593; logging everyday thoughts</p>
              <h4><a href="https://inmydefense.glitch.me/">In My Defense</a></h4>

          </div>
        </div>
    </Layout>
)

export default IndexPage
