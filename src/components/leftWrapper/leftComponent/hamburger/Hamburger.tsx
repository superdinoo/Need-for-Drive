import React, { useState } from 'react'
import './Hamburger.scss'

import MenuContent from '../menuContent/MenuContent'
import MenuIcon from './menuIcon/MenuIcon'

const Hamburger: React.FC<{ currentPages: string }> = ({ currentPages }) => {
  const [clickHamburger, setClickHamburger] = useState(false)

  const handleClickHamburger = () => {
    setClickHamburger(!clickHamburger)
  }

  return (
    <>
      <div className="hamburger">
        <div className="menu">
          <MenuIcon
            name={clickHamburger ? 'cross' : 'menu'}
            handleClick={handleClickHamburger}
          />
        </div>
        {clickHamburger ? null : (
          <div className="language">
            <p className="eng">Eng</p>
          </div>
        )}
      </div>
      <MenuContent showMenu={clickHamburger} currentPages={currentPages} />
    </>
  )
}

export default Hamburger
