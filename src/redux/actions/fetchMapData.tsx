import { Dispatch } from 'redux'
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  RootAction,
} from './apiAction'
import { fetchData, coordinatesFromResponse } from '../api/api'

const fetchMapData = (city: string, point: string, option: RequestInit) => {
  return async (dispatch: Dispatch<RootAction>) => {
    dispatch(fetchDataRequest())
    try {
      const data = await fetchData(city, point, option)
      const result = coordinatesFromResponse(data)
      dispatch(fetchDataSuccess(result))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Ошибка при получении координат', error)
      dispatch(fetchDataFailure(new Error('Ошибка при получении координат')))
    }
  }
}

export default fetchMapData
