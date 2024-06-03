/* eslint-disable no-nested-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointRate } from '../../../additionallyPath/selectors'

const OrderPathRate = () => {
  const activeRate = useSelector(selectActivePointRate)
  return (
    <div>
      {activeRate.everyMinute || activeRate.forADay ? (
        <div className="textOrderContainer">
          <p className="txtOrder">Тариф</p>
          <div className="adressOrder">
            <p className="cityOrder">
              {activeRate.everyMinute
                ? 'Поминутно'
                : activeRate.forADay
                  ? 'На сутки'
                  : ''}
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default OrderPathRate
