/* eslint-disable no-shadow */
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointColor } from 'components/additionallyPath/selectors'
import { InitialStateAdditionally } from '../../../../interface/Interface'

enum EPath {
  Red = 'Красный',
  Blue = 'Синий',
  Any = 'Любой',
}

const OrderPathColor: React.FC = () => {
  const activeColor = useSelector(selectActivePointColor)

  const handleActiveColor = (
    color: InitialStateAdditionally['activePointColor'],
  ) => {
    if (color.red) return EPath.Red
    if (color.blue) return EPath.Blue
    return EPath.Any
  }

  return (
    <div>
      {activeColor.red || activeColor.any || activeColor.blue ? (
        <div className="textOrderContainer">
          <p className="txtOrder">Цвет</p>
          <div className="adressOrder">
            <p className="cityOrder">{handleActiveColor(activeColor)}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default OrderPathColor
