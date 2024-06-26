import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCar } from '../../../redux/reducers/carSlice'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../redux/reducers/additionallySlice'
import setRatesDate from '../../../redux/actions/setRentalDate'
import { getCarInfo } from '../selectors'
import apiSwaggerCar from '../apiSwaggerCar'

const useCarAction = () => {
  const dispatch = useDispatch()
  const { activePoint } = useSelector(getCarInfo)
  const { fetchCarApi } = apiSwaggerCar()

  const handleActiveCar = useCallback(
    (
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
    },
    [dispatch],
  )

  useEffect(() => {
    fetchCarApi()
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
  }, [activePoint, dispatch])

  return { handleActiveCar }
}

export default useCarAction
