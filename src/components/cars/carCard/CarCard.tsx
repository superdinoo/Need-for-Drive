import React, { useEffect } from 'react'
import './CarCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCar } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import { CarApi } from '../../../interface/Interface'
import apiSwaggerCar from '../apiSwaggerCar'
import CarLoader from './CarLoader'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../redux/reducers/additionallySlice'
import setRatesDate from '../../../redux/actions/setRentalDate'

const CarCard: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint, activeCar, filterCar } = useSelector(getCarInfo)
  const { fetchCarApi, carsMain } = apiSwaggerCar()

  const handleActiveCar = (
    carID: number,
    carName: string,
    carMinPrice: number,
    carMaxPrice: number,
    carMarkNumber: string,
    carImg: string,
    carColors: string[],
  ) => {
    dispatch(
      setActiveCar({
        id: carID,
        name: carName,
        priceMin: carMinPrice,
        priceMax: carMaxPrice,
        markNumber: carMarkNumber,
        img: carImg,
        color: carColors,
      }),
    )
  }

  useEffect(() => {
    fetchCarApi()
    dispatch(setActiveColor({ colorKey: '', reset: true }))
    dispatch(setActiveRate({ rateKey: '', reset: true, price: 0 }))
    dispatch(
      setActiveOptions({
        optionsKey: 'all',
        reset: true,
      }),
    )
    dispatch(
      setRatesDate({
        start: '',
        end: '',
      }),
    )
  }, [activePoint, dispatch])

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
