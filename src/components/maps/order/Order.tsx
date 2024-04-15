import React, { useEffect, useState } from 'react'
import './Order.scss'

interface OrderProps {
  city: string
  point: string
}

const Order: React.FC<OrderProps> = ({ city, point }) => {
  const [currentCity, setCurrentCity] = useState('')
  const [currentPoint, setCurrentPoint] = useState('')

  useEffect(() => {
    setCurrentCity(city)
    setCurrentPoint(point)
  }, [city, point])

  return (
    <div className="orderContainer">
      <div className="orderContainerMain">
        <div className="headerOrder">
          <h3 className="titleOrder">Ваш заказ: </h3>
        </div>
        <div className="textOrderContainer">
          <p className="txtOrder">Пункт выдачи</p>
          <div className="adressOrder">
            <p className="cityOrder">{currentCity} </p>
            <p className="streetOrder"> {currentPoint}</p>
          </div>
        </div>
        {/* Поле для будущих блоков */}
        {/* <div className="priceOrderContainer">
          <h3 className="priceOrder">Цена: </h3>
          <p className="priceOrderWidth"> от 8 000 до 12 000 ₽</p>
        </div> */}

        <div className="btnContainerOrder">
          <button
            type="button"
            className="btnOrder"
            style={{
              background:
                currentCity.length > 0 && currentPoint.length > 0
                  ? 'linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%)'
                  : '#EEEEEE',
            }}
          >
            Выбрать модель
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
