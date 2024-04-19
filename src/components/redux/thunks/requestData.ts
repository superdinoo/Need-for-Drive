import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/ApiAction'
import fetchData from '../../maps/apiMap/api'

const fetchAndSaveData = (city: string, point: string) => {
  return async (dispatch: any) => {
    dispatch(fetchDataRequest())
    try {
      const data = await fetchData(city, point)
      dispatch(fetchDataSuccess(data))
    } catch (error) {
      dispatch(fetchDataFailure(error))
    }
  }
}
export default fetchAndSaveData
