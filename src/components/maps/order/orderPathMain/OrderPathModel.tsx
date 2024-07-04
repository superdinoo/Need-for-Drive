import React from 'react'
import { OrderProps } from '../../../../interface/Interface'

const OrderPathModel: React.FC<OrderProps> = ({ activeCar }) => {
  return (
    <div className="textOrderContainer">
      <p className="txtOrder">Модель</p>
      <div className="adressOrder">
        <p className="cityOrder"> {activeCar.name} </p>
      </div>
    </div>
  )
}

export default OrderPathModel
