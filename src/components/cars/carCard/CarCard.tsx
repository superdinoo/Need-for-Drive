import React, { useEffect } from 'react'
import './CarCard.scss'
import { useSelector } from 'react-redux'
import { getCarInfo } from '../selectors'
import { CarApi } from '../../../interface/Interface'
import apiSwaggerCar from '../apiSwaggerCar'
import CarLoader from './CarLoader'
import useCarAction from './useCarAction'

const CarCard: React.FC = () => {
  const { activeCar, filterCar } = useSelector(getCarInfo)
  const { carsMain, fetchCarApi } = apiSwaggerCar()
  const { handleActiveCar } = useCarAction()

  useEffect(() => {
    fetchCarApi()
  }, [])

  return (
    <div className="modelCartContainer">
      <div className="modelCartWrapper">
        <div className="allWraperCar">
          {carsMain.length > 0
            ? filterCar.map((car: CarApi) => (
                <div
                  role="button"
                  tabIndex={0}
                  className={
                    activeCar.id === car.id ? 'activeCart' : 'styleCart'
                  }
                  key={car.id}
                  onClick={() =>
                    handleActiveCar(
                      car.id,
                      car.name,
                      car.priceMin,
                      car.priceMax,
                      car.number,
                      car.thumbnail.path,
                      car.colors,
                    )
                  }
                >
                  <div className="titleCar">
                    <h3 className="txtTitle">{car.name}</h3>
                  </div>
                  <div className="priceCar">
                    <p className="txtPrice">{`${car.priceMin} - ${car.priceMax} ₽`}</p>
                  </div>
                  <div className="imgCar">
                    <img
                      className="img"
                      src={car.thumbnail.path}
                      alt="oneCar"
                    />
                  </div>
                </div>
              ))
            : Array.from({ length: 10 }).map(() => (
                <div className="styleCart">
                  <CarLoader />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default CarCard
