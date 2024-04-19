import React, { useEffect } from 'react'
import './Maps.scss'
import { useDispatch } from 'react-redux'
import { Hamburger, Header } from '../../leftStart/leftComponent'
import BreadCramb from '../../maps/breadCramb/BreadCramb'
import Order from '../../maps/order/Order'
import InputCity from '../../maps/inputCity/InputCity'

import changePage from '../../redux/actions/PageAction'

const Maps: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('location'))
  }, [dispatch])

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
        <Hamburger />
      </div>
    </div>
  )
}

export default Maps
