export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  }
}

export const fetchDataSuccess = (data: Record<number, number>) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchDataFailure = (error: Error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  }
}
