/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface BreadCrambsProps<T> {
  title: string
  activePoint: T
  handleActivePoint: (marker: string) => void
  items: { text: string; marker: string }[]
}

const BreadCrambSkelet = <T extends Record<string, any>>({
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
          {items.map((item, index) => (
            <div key={index}>
              <div
                className="allModel"
                onClick={() => handleActivePoint(item.marker)}
              >
                <div
                  className={
                    activePoint[item.marker] ? 'activeCircle' : 'circle'
                  }
                />
                <p
                  className={
                    activePoint[item.marker] ? 'allTextBlack' : 'allText'
                  }
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreadCrambSkelet
