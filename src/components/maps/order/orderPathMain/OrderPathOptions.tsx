import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivePointOptions } from '../../../additionallyPath/selectors'

const OrderPathOptions: React.FC = () => {
  const activeOptions = useSelector(selectActivePointOptions)
  return (
    <div>
      {activeOptions && (
        <>
          {[
            { key: 'tank', label: 'Полный бак' },
            { key: 'seat', label: 'Детское кресло' },
            { key: 'wheel', label: 'Правый руль' },
          ].map(
            (option) =>
              activeOptions[option.key] && (
                <div key={option.key} className="textOrderContainer">
                  <p className="txtOrder">{option.label}</p>
                  <div className="adress">
                    <p className="cityOrder">Да</p>
                  </div>
                </div>
              ),
          )}
        </>
      )}
    </div>
  )
}

export default OrderPathOptions
