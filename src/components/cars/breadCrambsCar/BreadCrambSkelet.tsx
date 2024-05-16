import React from 'react'

interface BreadCrambsProps<T> {
  title: string
  activePoint: T
  handleActivePoint: (marker: string) => void
  items: { text: string; marker: string; id: number }[]
}

const BreadCrambSkelet = <T extends Record<string, boolean>>({
  activePoint,
  handleActivePoint,
  items,
  title,
}: BreadCrambsProps<T>) => {
  return (
    <div className="breadCrambModelCar">
      <div className="containerBreadCrambModelCar">
        <p className="titleBread">{title}</p>
        <div className="containerAllModel">
          {items.map((item) => (
            <div key={item.id}>
              <div className="formRadio">
                <input
                  className="radioBtn"
                  type="radio"
                  id={`radio-${item.id}`}
                  checked={activePoint[item.marker]}
                  onChange={() => handleActivePoint(item.marker)}
                />
                <label
                  className={
                    activePoint[item.marker] ? 'allTextBlack' : 'allText'
                  }
                  htmlFor={`radio-${item.id}`}
                >
                  {item.text}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreadCrambSkelet
