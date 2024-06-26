import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setActivePoint,
  setResetActiveCar,
} from '../../../redux/reducers/carSlice'
import setLocation from '../../../redux/actions/setLocation '
import { UseLocationInputProps } from '../../../interface/Interface'

const useLocationinput = ({
  cities,
  points,
  fetchCities,
  fetchPoints,
}: UseLocationInputProps) => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
    cityId: null as string | null,
    pointId: null as string | null,
  })

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')

      if (name === 'city') {
        const selectedCity = cities.find((city) => city.name === truncatedValue)
        setInputValues((prevState) => ({
          ...prevState,
          city: truncatedValue,
          cityId: selectedCity ? selectedCity.id : null,
        }))
        fetchCities(truncatedValue)
      }

      if (name === 'point' && inputValues.city) {
        const selectedPoint = points.find(
          (point) => point.name === truncatedValue,
        )
        setInputValues((prevState) => ({
          ...prevState,
          point: truncatedValue,
          pointId: selectedPoint ? selectedPoint.id : null,
        }))
        fetchPoints(truncatedValue)
      }
    },
    [cities, points, fetchCities, fetchPoints],
  )

  const filteredPoints = !inputValues.city
    ? []
    : points.filter((point) => point.cityId?.name === inputValues.city)

  const addressPoint = filteredPoints.find(
    (point) => point.name === inputValues.point,
  )

  useEffect(() => {
    fetchCities(inputValues.city)
    fetchPoints(inputValues.point)

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
    dispatch(setActivePoint({ pointKey: '', reset: true }))
    dispatch(setResetActiveCar())
  }, [inputValues.city, inputValues.point, dispatch, fetchCities, fetchPoints])

  return { handleInputChange, inputValues, filteredPoints, addressPoint }
}

export default useLocationinput
