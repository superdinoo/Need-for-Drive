/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import './CarCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCar, setFilterCar } from '../../../redux/reducers/carSlice'
import { Car } from '../../../interface/Interface'
import { getCarInfo } from '../selectors'

const CarCard: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint, activeCar, filterCar } = useSelector(getCarInfo)

  const handleActiveCar = (
    carID: number,
    carName: string,
    carPrice: string,
  ) => {
    dispatch(setActiveCar({ id: carID, name: carName, price: carPrice }))
  }

  useEffect(() => {
    dispatch(setFilterCar())
  }, [activePoint, dispatch])

  return (
    <div className="modelCartContainer">
      <div className="modelCartWrapper">
        <div className="allWraperCar">
          {filterCar.map((car: Car) => (
            <div
              className={activeCar.id === car.id ? 'activeCart' : 'styleCart'}
              key={car.id}
              onClick={() => handleActiveCar(car.id, car.name, car.price)}
            >
              <div className="titleCar">
                <h3 className="txtTitle">{car.name}</h3>
              </div>
              <div className="priceCar">
                <p className="txtPrice">{car.price}</p>
              </div>
              <div className="imgCar">
                <img className="img" src={car.img} alt="oneCar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarCard
