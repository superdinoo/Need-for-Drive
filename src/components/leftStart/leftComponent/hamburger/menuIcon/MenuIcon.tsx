import React from 'react'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

interface MenuIconsProps {
  name: string
  handleClick: () => void
}

const MenuIcon: React.FC<MenuIconsProps> = ({ name, handleClick }) => {
  const icons: { [key: string]: JSX.Element } = {
    menu: <RxHamburgerMenu className="menuIcon" onClick={handleClick} />,
    cross: <RxCross2 className="menuIcon" onClick={handleClick} />,
  }
  const ChosenIcon = icons[name]

  return ChosenIcon
}

export default MenuIcon
