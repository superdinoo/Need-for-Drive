import { useCallback, useEffect, useState } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootState'
import setLocation from '../../../redux/actions/setLocation '
import { fetchCities, fetchPoints } from '../../../redux/thunks'
import { City, Point } from '../../../interface/Interface'

const useLocationInput = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()
  const { cities, points } = useSelector((state: RootState) => state.apiSwagger)
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
    cityId: null as string | null,
    pointId: null as string | null,
  })

  const handleInputChange = useCallback((name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')
    setInputValues((prevState) => {
      if (name === 'city') {
        const selectedCity = cities.find(
          (city: City) => city.name === truncatedValue,
        )

        return {
          ...prevState,
          city: truncatedValue,
          cityId: selectedCity ? selectedCity.id : null,
        }
      }

      if (name === 'point' && prevState.city) {
        const selectedPoint = points.find(
          (point: Point) => point.name === truncatedValue,
        )
        return {
          ...prevState,
          point: truncatedValue,
          pointId: selectedPoint ? selectedPoint.id : null,
        }
      }

      return {
        ...prevState,
        [name]: truncatedValue,
      }
    })
  }, [])

  const filteredPoints = points.filter(
    (point: Point) => point.cityId?.name === inputValues.city,
  )

  const addressPoint = filteredPoints.find(
    (point: Point) => point.name === inputValues.point,
  )

  useEffect(() => {
    if (inputValues.city) {
      dispatch(fetchCities(inputValues.city))
    }
    if (inputValues.city && inputValues.point) {
      dispatch(fetchPoints(inputValues.point))
    }
    const cityIdNumber = inputValues.cityId ? Number(inputValues.cityId) : 0

    const pointIdNumber = inputValues.pointId ? Number(inputValues.pointId) : 0
    dispatch(
      setLocation({
        city: inputValues.city,
        point: inputValues.point,
        cityId: cityIdNumber,
        pointId: pointIdNumber,
        address: addressPoint ? addressPoint.address : '',
        option: '',
      }),
    )
  }, [inputValues.city, inputValues.point, addressPoint, dispatch])
  return {
    inputValues,
    cities,
    handleInputChange,
    filteredPoints,
    addressPoint,
  }
}

export default useLocationInput
