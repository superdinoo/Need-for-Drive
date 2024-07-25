import React, { useEffect } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { AnyAction } from 'redux'
import './CarCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCarInfo } from '../selectors'
import { CarApi } from '../../../interface/Interface'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../redux/reducers/additionallySlice'
import setRatesDate from '../../../redux/actions/setRentalDate'
import CarShadow from './CarShadow'
import { fetchCarApi } from '../../../redux/thunks'
import { setActiveCar } from '../../../redux/reducers/carSlice'

const CarCard: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()
  const {
    activePoint,
    activeCar,
    filterCar: filteredCars,
  } = useSelector(getCarInfo)

  const handleActiveCar = (car: CarApi) => {
    dispatch(setActiveCar(car))
    dispatch(setActiveColor({ colorKey: '', reset: true }))
    dispatch(setActiveRate({ rateKey: '', reset: true, price: 0, id: 0 }))
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
  }, [activePoint, dispatch])

  return (
    <div className="modelCartContainer">
      <div className="modelCartWrapper">
        <div className="allWraperCar">
          {filteredCars.length > 0 ? (
            filteredCars.map((car: CarApi) => (
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
