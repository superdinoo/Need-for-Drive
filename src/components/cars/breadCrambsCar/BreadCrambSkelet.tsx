import classNames from 'classnames'
import React, { HTMLInputTypeAttribute } from 'react'

interface BreadCrambsProps<T> {
  title: string
  activePoint: T
  handleActivePoint: (marker: string, price?: number) => void
  items: { text: string; marker: string; id: number; price?: number }[]
  initialPath: 'rate' | 'color' | 'options' | 'car'
  type: HTMLInputTypeAttribute
}

const BreadCrambSkelet = <T extends Record<string, boolean>>({
  activePoint,
  handleActivePoint,
  items,
  title,
  initialPath,
  type,
}: BreadCrambsProps<T>) => {
  const breadCrambClass = classNames('containerAllModel', {
    containerAllModelRate: initialPath === 'rate' || initialPath === 'options',
    containerAllModelColor: initialPath === 'color',
    containerAllModelCarOptions: initialPath === 'car',
  })

  return (
    <div className="breadCrambModelCar">
      <div className="containerBreadCrambModelCar">
        <p className="titleBread">{title}</p>
        <div className={breadCrambClass}>
          {items.map((item) => (
            <div key={item.id}>
              <div
                className={classNames('formRadio', {
                  formRadioBox: initialPath === 'options',
                })}
              >
                <input
                  className={classNames('radioBtnBox', {
                    radioBtn:
                      initialPath === 'rate' ||
                      initialPath === 'color' ||
                      initialPath === 'car',
                  })}
                  type={type}
                  id={`${initialPath}-${item.id}`}
                  checked={activePoint[item.marker]}
                  onChange={() => handleActivePoint(item.marker, item.price)}
                />

                <label
                  className={
                    activePoint[item.marker] ? 'allTextBlack' : 'allText'
                  }
                  htmlFor={`${initialPath}-${item.id}`}
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
