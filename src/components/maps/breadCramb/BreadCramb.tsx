import React from 'react'
import './BreadCramb.scss'

import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import selectLocation from '../order/selectLocation'

const BreadCramb: React.FC = () => {
  const { city, point } = useSelector(selectLocation)
  const location = useLocation()

  return (
    <div className="breadCramb">
      <div className="containerBread">
        <div className="iconContainer">
          <Link
            to={
              city.length > 0 && point.length > 0
                ? '/ModelCar'
                : '/LocationPage'
            }
          >
            <p
              className="breadIcon"
              style={{
                color:
                  location.pathname === '/LocationPage' ? '#0EC261' : 'black',
              }}
            >
              Местоположение
            </p>
          </Link>
          <IoMdArrowDropright className="arrowIcon" />
          <Link
            to={
              city.length > 0 && point.length > 0
                ? '/ModelCar'
                : '/LocationPage'
            }
          >
            <p
              className="breadIcon"
              style={{
                color: location.pathname === '/ModelCar' ? '#0EC261' : 'black',
              }}
            >
              Модель
            </p>
          </Link>

          <IoMdArrowDropright className="arrowIcon" />
          <p className="breadIcon">Дополнительно</p>
          <IoMdArrowDropright className="arrowIcon" />
          <p className="breadIcon">Итого</p>
        </div>
      </div>
    </div>
  )
}

export default BreadCramb
