import React, { useState } from 'react'
import './Maps.scss'
import { Hamburger, Header } from '../../leftStart/leftComponent'
import BreadCramb from '../../maps/breadCramb/BreadCramb'
import Order from '../../maps/order/Order'
import InputCity from '../../maps/inputCity/InputCity'

const Maps: React.FC = () => {
  const [location, setLocation] = useState({ city: '', point: '' })

  const handleLocationChange = (city: string, point: string) => {
    setLocation({ city, point })
  }

  return (
    <div className="mapContainer">
      <div className="mapWrapperContainer">
        <div className="setHeader">
          <Header />
        </div>
        <BreadCramb />
        <div className="settingOrderInput">
          <Order city={location.city} point={location.point} />
          <InputCity onLocationChange={handleLocationChange} />
        </div>
      </div>
      <div className="hmContainer">
        <Hamburger />
      </div>
    </div>
  )
}

export default Maps
