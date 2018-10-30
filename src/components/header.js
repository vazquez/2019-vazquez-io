import React from 'react'
import { Link } from 'gatsby'

// Another way of importing images:
// import logo from '../images/logo-designcode.svg'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
