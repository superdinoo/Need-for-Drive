import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLocation } from '../selectorsOrder'
import { OrderProps } from '../../../../interface/Interface'

const OrderPathBtn: React.FC<OrderProps> = ({ activeCar, currentPages }) => {
  const { city, point } = useSelector(selectLocation)
  let toPath = '/LocationPage'

  const cityAndPoint = city.length > 0 && point.length > 0

  if (cityAndPoint) {
    toPath = '/ModelCar'
  }
  if (activeCar.name.length > 0 && city.length > 0 && point.length > 0) {
    toPath = '/Additionally'
  }

  const handleNameBtn = () => {
    switch (currentPages) {
      case 'location':
        return 'Выбрать модель'
      case 'modelCar':
        return 'Дополнительно'
      case 'additionally':
        return 'Итого'
      default:
        return ''
    }
  }

  return (
    <div className="btnContainerOrder">
      <Link to={toPath} className="linkOrder">
        <button
          type="button"
          className={cityAndPoint ? 'btnOrderTrue' : 'btnOrder'}
        >
          {handleNameBtn()}
        </button>
      </Link>
    </div>
  )
}

export default OrderPathBtn
