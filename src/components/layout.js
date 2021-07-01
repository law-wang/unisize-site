import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import AboutBlock from "./about"

import "../styles/general.scss"

const Layout = ({ children }) => {

  const showAbout = () => {
    const aboutBlock = document.querySelector("#aboutblock")
    if (aboutBlock.classList.contains('about-show')) {
      aboutBlock.classList.remove('about-show')
    } else {
      aboutBlock.classList.add('about-show')
    }
  }

  return (
    <div className="container">

      <div className="background"></div>

      <header>
        <div>
          <Link to="/"><b>Lawrence Wang</b></Link>
          <button onClick={showAbout}>
            About
          </button>
        </div>

        <div className="navigation">
          <div>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          &nbsp;
          <div>
            <Link to="/blog">Writing</Link>
          </div>
          &nbsp;
          <div>
            <Link to="/art/digital">Art</Link>
          </div>
        </div>
      </header>

      {children}
      <AboutBlock />

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
