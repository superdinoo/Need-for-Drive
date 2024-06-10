import React from 'react'
import './Total.scss'
import { Hamburger, Header } from 'components/leftWrapper/leftComponent'
import BreadCramb from 'components/maps/breadCramb/BreadCramb'
import Order from 'components/maps/order/Order'
import TotalPath from '../../components/totalPath/TotalPath'

const Total: React.FC = () => {
  const currentPages = 'totalPages'
  return (
    <div className="totalContainer">
      <div className="totalWrapper">
        <div className="setHeader">
          <Header />
        </div>
        <BreadCramb />
        <div className="wrapperCenterTotal">
          <div className="settingCenterTotal">
            <TotalPath />
          </div>
          <Order currentPages={currentPages} />
        </div>
      </div>
      <div className="hmContainerTotal">
        <Hamburger currentPages={currentPages} />
      </div>
    </div>
  )
}

export default Total
