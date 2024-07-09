import { useCallback, useEffect, useState } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootState'
import setLocation from '../../../redux/actions/setLocation '
import { fetchCities, fetchPoints } from '../../../redux/thunks'

const useLocationInput = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()
  const { cities, points } = useSelector((state: RootState) => state.apiSwagger)
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
  })

  const handleInputChange = useCallback((name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')

    setInputValues((prevState) => ({
      ...prevState,
      [name]: truncatedValue,
    }))
  }, [])

  const filteredPoints = points.filter(
    (point) => point.cityId?.name === inputValues.city,
  )

  const addressPoint = filteredPoints.find(
    (point) => point.name === inputValues.point,
  )

  useEffect(() => {
    if (inputValues.city) {
      dispatch(fetchCities(inputValues.city))
    }
    if (inputValues.city && inputValues.point) {
      dispatch(fetchPoints(inputValues.point))
    }
    dispatch(
      setLocation({
        city: inputValues.city,
        point: inputValues.point,
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
