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
    carPrice: number,
    carMarkNumber: string,
    carImg: string,
    carPriceCart: string,
  ) => {
    dispatch(
      setActiveCar({
        id: carID,
        name: carName,
        price: carPrice,
        markNumber: carMarkNumber,
        img: carImg,
        priceCart: carPriceCart,
      }),
    )
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
              role="button"
              tabIndex={0}
              className={activeCar.id === car.id ? 'activeCart' : 'styleCart'}
              key={car.id}
              onClick={() =>
                handleActiveCar(
                  car.id,
                  car.name,
                  car.price,
                  car.markNumber,
                  car.img,
                  car.priceCart,
                )
              }
            >
              <div className="titleCar">
                <h3 className="txtTitle">{car.name}</h3>
              </div>
              <div className="priceCar">
                <p className="txtPrice">{car.priceCart}</p>
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
