/* eslint-disable default-param-last */
import { ChangePageAction } from '../../../interface/Interface'

interface StateType {
  currentPage: string
}

const initialState: StateType = {
  currentPage: 'home',
}

const PageReducer = (
  state: StateType = initialState,
  action: ChangePageAction,
): StateType => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      }
    default:
      return state
  }
}

export default PageReducer
