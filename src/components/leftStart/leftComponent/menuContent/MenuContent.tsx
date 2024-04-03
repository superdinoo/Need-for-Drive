import React from 'react'
import './MenuContent.scss'
import { Facebook, Insta, Telega } from '../../../../assets'

interface MenuContentProps {
  showMenu: boolean
}

const MenuContent: React.FC<MenuContentProps> = ({ showMenu }) => {
  return (
    <div className={`menuContent ${showMenu ? 'show' : ''}`}>
      <div className="mainMenu">
        <ul className="menuContentList">
          <li className="menuContentListText">Парковка</li>
          <li className="menuContentListText">Страховка</li>
          <li className="menuContentListText">Бензин</li>
          <li className="menuContentListText">Обслуживание</li>
        </ul>
        <div className="menuSocial">
          <Telega />
          <Facebook />
          <Insta />
        </div>
      </div>
    </div>
  )
}

export default MenuContent
