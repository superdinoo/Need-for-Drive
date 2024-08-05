import React from 'react'
import { useSelector } from 'react-redux'
import { selectLocation } from '../selectorsOrder'

const OrderPathHeader: React.FC = () => {
  const { city, point } = useSelector(selectLocation)

  return (
    <div>
      <div className="headerOrder">
        <h3 className="titleOrder">Ваш заказ: </h3>
      </div>
      <div className="textOrderContainer">
        <p className="txtOrder">Пункт выдачи</p>
        <div className="adressOrder">
          <p className="cityOrder">{city} </p>
          <p className="streetOrder">{point}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderPathHeader
