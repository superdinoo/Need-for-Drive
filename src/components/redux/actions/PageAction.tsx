import { ChangePageAction } from '../../../interface/Interface'

const changePage = (page: string): ChangePageAction => {
  return {
    type: 'CHANGE_PAGE',
    payload: page,
  }
}

export default changePage
