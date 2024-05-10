/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
import React from 'react'
import './Order.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import selectLocation from './selectLocation'
import { selectActiveCar } from '../../cars/selectors'

interface CarentPages {
  currentPages: string
}

const Order: React.FC<CarentPages> = ({ currentPages }) => {
  const { city, point } = useSelector(selectLocation)
  const activeCar = useSelector(selectActiveCar)
  console.log(activeCar.name > 0 ? true : false)
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
        {currentPages === 'modelCar' ? (
          <>
            <div className="textOrderContainer">
              <p className="txtOrder">Модель</p>
              <div className="adressOrder">
                <p className="cityOrder">Hynday, {activeCar.name} </p>
              </div>
            </div>
            <div className="priceOrderContainer">
              <h3 className="priceOrder">Цена: </h3>
              <p className="priceOrderWidth">{activeCar.price}</p>
            </div>
          </>
        ) : (
          ''
        )}

        <div className="btnContainerOrder">
          <Link
            to={
              city.length > 0 && point.length > 0
                ? '/ModelCar'
                : activeCar.name.length > 0
                  ? '/Additionally'
                  : ''
            }
            className="linkOrder"
          >
            <button
              type="button"
              className="btnOrder"
              style={{
                background:
                  (city.length > 0 && point.length > 0) ||
                  (activeCar.name.length > 7 && activeCar.price.length > 0)
                    ? 'linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%)'
                    : '#EEEEEE',
              }}
            >
              {currentPages === 'modelCar' ? 'Дополнительно' : 'Выбрать модель'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Order
