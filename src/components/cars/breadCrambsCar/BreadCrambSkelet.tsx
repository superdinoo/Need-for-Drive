import React from 'react'

interface BreadCrambsProps<T> {
  title: string
  activePoint: T
  handleActivePoint: (marker: string) => void
  items: { text: string; marker: string; id: number }[]
  initialPath: string
}

const BreadCrambSkelet = <T extends Record<string, boolean>>({
  activePoint,
  handleActivePoint,
  items,
  title,
  initialPath,
}: BreadCrambsProps<T>) => {
  return (
    <div className="breadCrambModelCar">
      <div className="containerBreadCrambModelCar">
        <p className="titleBread">{title}</p>
        <div
          className={
            initialPath === 'rate' || initialPath === 'options'
              ? 'containerAllModelRate'
              : 'containerAllModel'
          }
        >
          {items.map((item, index) => (
            <div key={item.id}>
              <div className="formRadio">
                <input
                  className="radioBtn"
                  type="radio"
                  id={`radio-${index}`}
                  checked={activePoint[item.marker]}
                  onChange={() => handleActivePoint(item.marker)}
                />
                <label
                  className={
                    activePoint[item.marker] ? 'allTextBlack' : 'allText'
                  }
                  htmlFor={`radio-${index}`}
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
