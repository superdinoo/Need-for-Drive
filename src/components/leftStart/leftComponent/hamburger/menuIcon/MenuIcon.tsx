import React from 'react'
import * as iconRx from 'react-icons/rx'

interface MenuIconsProps {
  name: keyof typeof iconRx
  handleClick: () => void
}

const MenuIcon: React.FC<MenuIconsProps> = ({ name, handleClick }) => {
  const icons: { [key: string]: JSX.Element } = {
    menu: <iconRx.RxHamburgerMenu className="menuIcon" onClick={handleClick} />,
    cross: <iconRx.RxCross2 className="menuIcon" onClick={handleClick} />,
  }
  const ChosenIcon = icons[name]

  return ChosenIcon
}

export default MenuIcon
