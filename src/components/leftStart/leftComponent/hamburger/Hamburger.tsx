import React, { useState } from 'react'
import './Hamburger.scss'

import { RxHamburgerMenu } from 'react-icons/rx'
import MenuContent from '../menuContent/MenuContent'

const Hamburger: React.FC = () => {
  const [clickHamburger, setClickHamburger] = useState(false)

  const handleClickHamburger = () => {
    setClickHamburger(!clickHamburger)
  }

  return (
    <>
      <div className="hamburger">
        <div className="menu">
          {clickHamburger ? (
            <img
              src="../../../img/menu_btn.png"
              alt="cross"
              className="menuIcon"
              onClick={handleClickHamburger}
            />
          ) : (
            <RxHamburgerMenu
              className="menuIcon"
              onClick={handleClickHamburger}
            />
          )}
        </div>
        {clickHamburger ? null : (
          <div className="language">
            <p className="eng">Eng</p>
          </div>
        )}
      </div>
      <MenuContent showMenu={clickHamburger} />
      {clickHamburger ? (
        <div className="languageMenu">
          <p className="eng">Eng</p>
        </div>
      ) : null}
    </>
  )
}

export default Hamburger
