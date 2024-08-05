/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/apiAction'

const fetchAndSaveData = (city: string, point: string) => {
  return async (dispatch: any, getState: any, extraArgument: any) => {
    dispatch(fetchDataRequest())
    const options: RequestInit = {}
    try {
      const currentState = getState()
      const { fetchData: fetch } = extraArgument
      const data = await fetch(city, point, options)
      dispatch(fetchDataSuccess(data))
    } catch (error) {
      dispatch(fetchDataFailure(error as Error))
    }
  }
}
export default fetchAndSaveData
