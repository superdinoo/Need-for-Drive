/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './MenuContent.scss'
import { useSelector } from 'react-redux'
import { Telega, Facebook, Insta } from '../../../../assets/svg'
import { MenuContentProps } from './MenuContentInterface'

const MenuContent: React.FC<MenuContentProps> = ({ showMenu }) => {
  const currentPage = useSelector((state: any) => state.currentPage)
  console.log(currentPage)
  const menuClasses = `menuContent ${showMenu ? 'show' : ''} ${currentPage === 'location' ? 'blackBackground' : 's'}`

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
