import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text2}</span>
      <span className="navigation-links-text1">{props.text3}</span>
      <span className="navigation-links-text2">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'About Us',
  text2: 'K-Dramas',
  text3: 'Popular Dramas',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
