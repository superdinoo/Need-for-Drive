import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointColor } from 'components/additionallyPath/selectors'
import { InitialStateAdditionally } from '../../../../interface/Interface'

const OrderPathColor: React.FC = () => {
  const activeColor = useSelector(selectActivePointColor)

  const handleActiveColor = (
    color: InitialStateAdditionally['activePointColor'],
  ) => {
    if (color.red) {
      return 'Красный'
    }
    if (color.blue) {
      return 'Синий'
    }
    if (color.any) {
      return 'Любой'
    }
    return ''
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
