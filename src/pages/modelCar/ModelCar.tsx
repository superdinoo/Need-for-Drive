/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import './ModelCar.scss'
import { Hamburger, Header } from '../../components/leftWrapper/leftComponent'
import BreadCramb from '../../components/maps/breadCramb/BreadCramb'
import Order from '../../components/maps/order/Order'
import BreadCrambsCar from '../../components/cars/breadCrambsCar/BreadCrambsCar'
import CarCard from '../../components/cars/carCard/CarCard'

const ModelCar: React.FC = () => {
  const currentPages = 'modelCar'
  return (
    <div className="containerModelCar">
      <div className="wrapperModelCar">
        <div className="setHeader">
          <Header />
        </div>
        <BreadCramb />
        <BreadCrambsCar />
        <div className="wrapperCenterModelCar">
          <CarCard />
          <Order currentPages={currentPages} />
        </div>
      </div>
      <div className="hmContainerModel">
        <Hamburger currentPages={currentPages} />
      </div>
    </div>
  )
}

export default ModelCar
