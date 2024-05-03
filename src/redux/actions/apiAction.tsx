export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export type RootAction =
  | { type: typeof FETCH_DATA_REQUEST }
  | { type: typeof FETCH_DATA_SUCCESS; payload: [number, number] }
  | { type: typeof FETCH_DATA_FAILURE; payload: Error }

export const fetchDataRequest = (): RootAction => {
  return {
    type: FETCH_DATA_REQUEST,
  }
}

export const fetchDataSuccess = (data: [number, number]): RootAction => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchDataFailure = (error: Error): RootAction => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  }
}
