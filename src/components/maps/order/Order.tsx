import React from 'react'
import './Order.scss'
import { useSelector } from 'react-redux'
import selectLocation from './Locationreducer'

const Order: React.FC = () => {
  const { city, point } = useSelector(selectLocation)

  return (
    <div className="orderContainer">
      <div className="orderContainerMain">
        <div className="headerOrder">
          <h3 className="titleOrder">Ваш заказ: </h3>
        </div>
        <div className="textOrderContainer">
          <p className="txtOrder">Пункт выдачи</p>
          <div className="adressOrder">
            <p className="cityOrder">{city} </p>
            <p className="streetOrder"> {point}</p>
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
                city.length > 0 && point.length > 0
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
