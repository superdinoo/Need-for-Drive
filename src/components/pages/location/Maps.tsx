import React from 'react'
import './Maps.scss'
// import { useDispatch } from 'react-redux'
import { Hamburger, Header } from '../../leftStart/leftComponent'
import BreadCramb from '../../maps/breadCramb/BreadCramb'
import Order from '../../maps/order/Order'
import InputCity from '../../maps/inputCity/InputCity'

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
          <Order />
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
