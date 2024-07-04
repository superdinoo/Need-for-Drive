import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointColor } from 'components/additionallyPath/selectors'
import { selectActiveCar } from 'components/cars/selectors'

const OrderPathColor: React.FC = () => {
  const activeColor = useSelector(selectActivePointColor)
  const activeCar = useSelector(selectActiveCar)

  const acriveColorKey = Object.keys(activeColor).find(
    (key) => activeColor[key],
  )

  const showActiveColor =
    acriveColorKey && activeCar.color.includes(acriveColorKey)

  return (
    <div>
      {showActiveColor ? (
        <div className="textOrderContainer">
          <p className="txtOrder">Цвет</p>
          <div className="adressOrder">
            <p className="cityOrder">{acriveColorKey}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default OrderPathColor
