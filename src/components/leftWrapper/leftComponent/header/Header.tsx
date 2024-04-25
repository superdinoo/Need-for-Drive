import React from 'react'
import './Header.scss'

import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/HomePage">
          <h3 className="logoText">Need for drive</h3>
        </Link>
      </div>
      <Link to="/LocationPage">
        <div className="city">
          <CiLocationOn className="cityIcon" />
          <p className="cityText">Ульяновск</p>
        </div>
      </Link>
    </div>
  )
}

export default Header
