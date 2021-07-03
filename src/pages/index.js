import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tracklist from "../components/tracklist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>

      <h2>Some Things I Built</h2>
      <div>
        <div><a href="https://thoughts.rence.la/">Thoughts</a></div>
        <div><a href="https://lyricsbyrence.glitch.me/">Lyrics by Rence</a></div>
        <div><a href="https://inmydefense.glitch.me/">In My Defense</a></div>
        <div><a href="https://www.planneduniverse.com/">Planned Universe</a></div>
      </div>

      <h2>Some Songs I Like</h2>
      <Tracklist />

      {/* <h2>Cool Things</h2>
      <div><a href="https://youtu.be/iVQhkDZS_Tk" target="_blank" rel="noopener noreferrer">a dream</a></div>
      <div><a href="https://youtu.be/kBF5l9rWQFs" target="_blank" rel="noopener noreferrer">a lesson on child-rearing</a></div>
      <div><a href="https://www.vogue.com/fashion-shows/fall-2005-couture/christian-dior/slideshow/collection#11" target="_blank" rel="noopener noreferrer">Dior without Maria Grazia</a></div>
      <div><a href="https://youtu.be/HUMygkRhB88" target="_blank" rel="noopener noreferrer">ASMR</a></div> */}

    </section>

  </Layout>
)

export default IndexPage
