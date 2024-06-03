/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectLocation } from '../selectorsOrder'
import { OrderProps, NamesBtn } from '../../../../interface/Interface'

enum EPath {
  '/' = '/LocationPage',
  '/LocationPage' = '/ModelCar',
  '/ModelCar' = '/Additionally',
}

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({ activeCar }) => {
  const { city, point } = useSelector(selectLocation)
  const { pathname } = useLocation()
  const [disabled, setDisabled] = useState(false)

  const cityAndPoint = city.length > 0 && point.length > 0
  const activeCarConst = activeCar.name.length > 0
  let nextPath = EPath['/']
  if (cityAndPoint) {
    nextPath = EPath['/LocationPage']
  }
  if (cityAndPoint && activeCarConst) {
    nextPath = EPath['/ModelCar']
  }
  const namesBtn: NamesBtn = {
    '/LocationPage': 'Выбрать модель',
    '/ModelCar': 'Дополнительно',
    '/Additionally': 'Итого',
  }

  const handleDisabled = () => {
    if (cityAndPoint || activeCarConst) setDisabled(!disabled)
  }

  return (
    <div className="btnContainerOrder">
      <Link to={nextPath} className="linkOrder">
        <button
          type="button"
          disabled={handleDisabled}
          className={`btnOrder ${
            cityAndPoint || activeCarConst ? 'btnOrderTrue' : ''
          }`}
        >
          {namesBtn[pathname] ?? ''}
        </button>
      </Link>
    </div>
  )
}

export default OrderPathBtn
