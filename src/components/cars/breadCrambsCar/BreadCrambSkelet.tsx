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
  const initialPathBread = () => {
    switch (initialPath) {
      case 'rate':
      case 'options':
        return 'containerAllModelRate'
      case 'color':
        return 'containerAllModelColor'
      default:
        return 'containerAllModel'
    }
  }
  const breadCrambClass = initialPathBread()
  return (
    <div className="breadCrambModelCar">
      <div className="containerBreadCrambModelCar">
        <p className="titleBread">{title}</p>
        <div className={breadCrambClass}>
          {items.map((item) => (
            <div key={item.id}>
              <div
                className={
                  initialPath === 'options' ? 'formRadioBox' : 'formRadio'
                }
              >
                <input
                  className={
                    initialPath === 'options' ? 'radioBtnBox' : 'radioBtn'
                  }
                  type={initialPath === 'options' ? 'checkbox' : 'radio'}
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
