import React from 'react'
import './MenuContent.scss'
import { Telega, Facebook, Insta } from '../../../../assets/svg'
import { MenuContentProps } from './MenuContentInterface'

const MenuContent: React.FC<MenuContentProps> = ({
  showMenu,
  currentPages,
}) => {
  const menuClasses = `menuContent ${showMenu ? 'show' : ''} ${currentPages === 'location' ? 'blackBackground' : ''}`
  return (
    <div className={menuClasses}>
      <div className="mainMenu">
        <ul className="menuContentList">
          <li className="menuContentListText">Парковка</li>
          <li className="menuContentListText">Страховка</li>
          <li className="menuContentListText">Бензин</li>
          <li className="menuContentListText">Обслуживание</li>
        </ul>
        <div className="menuSocial">
          <Telega className="menuSocialImg" />
          <Facebook className="menuSocialImg" />
          <Insta className="menuSocialImg" />
        </div>
      </div>
    </div>
  )
}

export default MenuContent
