import React from 'react'
import CarLoader from './CarLoader'

const CarShadow: React.FC = () => {
  const data = Array.from({ length: 10 }).map((_, index) => ({ id: index }))

  return (
    <div className="modelCartContainer">
      <div className="modelCartWrapper">
        <div className="allWraperCar">
          {data.map((item) => (
            <div className="styleCart" key={item.id}>
              <CarLoader />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarShadow
