import React from 'react'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

interface MenuIconsProps {
  isShowMenuIcon: boolean
  handleClick: () => void
}

const MenuIcon: React.FC<MenuIconsProps> = ({
  isShowMenuIcon,
  handleClick,
}) => {
  return (
    <>
      {isShowMenuIcon ? (
        <RxCross2 className="menuIcon" onClick={handleClick} />
      ) : (
        <RxHamburgerMenu className="menuIcon" onClick={handleClick} />
      )}
    </>
  )
}

export default MenuIcon
