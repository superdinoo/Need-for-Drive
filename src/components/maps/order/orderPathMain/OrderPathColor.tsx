import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointColor } from 'components/additionallyPath/selectors'
import { selectActiveCar } from 'components/cars/selectors'

const OrderPathColor: React.FC = () => {
  const activeColor = useSelector(selectActivePointColor)
  const activeCar = useSelector(selectActiveCar)

  let displayedColor = 'Любой'

  if (activeColor !== 'Любой' && activeCar.color.includes(activeColor)) {
    displayedColor = activeColor
  }

  return (
    <div>
      <div className="textOrderContainer">
        <p className="txtOrder">Цвет</p>
        <div className="adressOrder">
          <p className="cityOrder">{displayedColor}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderPathColor
