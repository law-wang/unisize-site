import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import AboutBlock from "./about"

// import "../../styles/general.scss"

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
    <div className="overall">
      <div className="container">

        <header>
          <div>
            <Link to="/">Lawrence Wang</Link>
            <button onClick={showAbout}>
              <span class="mobilehide">INFO</span>
              <span class="mobileshow">?</span>
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
