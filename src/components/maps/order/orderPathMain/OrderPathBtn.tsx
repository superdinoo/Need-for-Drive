import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLocation } from '../selectorsOrder'
import { OrderProps } from '../../../../interface/Interface'

const OrderPathBtn: React.FC<OrderProps> = ({ currentPages }) => {
  const { city, point } = useSelector(selectLocation)
  let toPath = '/LocationPage'
  if (city.length > 0 && point.length > 0) {
    toPath = '/ModelCar'
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
          className="btnOrder"
          style={{
            background:
              city.length > 0 && point.length > 0
                ? 'linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%)'
                : '#EEEEEE',
          }}
        >
          {handleNameBtn()}
        </button>
      </Link>
    </div>
  )
}

export default OrderPathBtn
