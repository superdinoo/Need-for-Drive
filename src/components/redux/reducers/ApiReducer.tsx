import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/ApiAction'

interface Action {
  type: string
  payload?: Record<number, number>
}

interface DataState {
  data: Record<number, number>
  status: string
  error: string | null
}

const initialState: DataState = {
  data: {},
  status: 'idle',
  error: null,
}

const dataReducer = (action: Action, state: DataState = initialState) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        status: 'loading',
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer
