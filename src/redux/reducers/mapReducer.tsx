/* eslint-disable default-param-last */
import {
  RootAction,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/apiAction'
import { MapState } from '../rootState'

const initialState: MapState = {
  center: [0, 0],
  address: [0, 0],
}

const mapReducer = (
  state: MapState = initialState,
  action: RootAction,
): MapState => {
  if (!action || !action.type) {
    return state
  }
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        center: action.payload,
        address: action.payload,
      }
    case FETCH_DATA_FAILURE:
      return state
    default:
      return state
  }
}

export default mapReducer
