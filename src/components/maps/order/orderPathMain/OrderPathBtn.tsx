import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLocation } from '../selectorsOrder'
import { OrderProps } from '../../../../interface/Interface'

const OrderPathBtn: React.FC<OrderProps> = ({ currentPages }) => {
  const { city, point } = useSelector(selectLocation)
  const cityPointLength = city.length > 0 && point.length > 0
  const toPath = cityPointLength ? '/ModelCar' : '/LocationPage'

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
          className={cityPointLength ? 'btnOrderTrue' : 'btnOrder'}
        >
          {handleNameBtn()}
        </button>
      </Link>
    </div>
  )
}

export default OrderPathBtn
