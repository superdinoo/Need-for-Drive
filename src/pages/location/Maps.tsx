import React from 'react'
import './Maps.scss'
import { Hamburger, Header } from '../../components/leftWrapper/leftComponent'
import BreadCramb from '../../components/maps/breadCramb/BreadCramb'
import Order from '../../components/maps/order/Order'
import InputCity from '../../components/maps/inputCity/InputCity'

const Maps: React.FC = () => {
  const currentPages = 'location'

  return (
    <div className="mapContainer ">
      <div className="mapWrapperContainer">
        <div className="setHeader">
          <Header />
        </div>
        <BreadCramb />
        <div className="settingOrderInput">
          <Order currentPages={currentPages} />
          <InputCity />
        </div>
      </div>
      <div className="hmContainer">
        <Hamburger currentPages={currentPages} />
      </div>
    </div>
  )
}

export default Maps
