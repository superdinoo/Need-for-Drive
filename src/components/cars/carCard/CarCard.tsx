import React, { useEffect } from 'react'
import './CarCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCar, setFilterCar } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import { CarApi } from '../../../interface/Interface'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../redux/reducers/additionallySlice'
import setRatesDate from '../../../redux/actions/setRentalDate'
import CarShadow from './CarShadow'
import { fetchCarApi } from '../../../redux/thunks/thunksLocation'
import { RootState } from '../../../redux/rootState'

const CarCard: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint, activeCar, filterCar } = useSelector(getCarInfo)
  const { carsAll } = useSelector((state: RootState) => state.apiSwagger)

  const handleActiveCar = (car: CarApi) => {
    dispatch(setActiveCar(car))
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
  }

  useEffect(() => {
    dispatch(fetchCarApi())
    dispatch(setFilterCar(carsAll))
  }, [activePoint, dispatch])

  return (
    <div className="modelCartContainer">
      <div className="modelCartWrapper">
        <div className="allWraperCar">
          {carsAll.length > 0 ? (
            filterCar.map((car: CarApi) => (
              <div
                role="button"
                tabIndex={0}
                className={activeCar.id === car.id ? 'activeCart' : 'styleCart'}
                key={car.id}
                onClick={() => handleActiveCar(car)}
              >
                <div className="titleCar">
                  <h3 className="txtTitle">{car.name}</h3>
                </div>
                <div className="priceCar">
                  <p className="txtPrice">{`${car.priceMin} - ${car.priceMax} ₽`}</p>
                </div>
                <div className="imgCar">
                  <img className="img" src={car.thumbnail.path} alt="oneCar" />
                </div>
              </div>
            ))
          ) : (
            <CarShadow />
          )}
        </div>
      </div>
    </div>
  )
}

export default CarCard
