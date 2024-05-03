export interface InputCityProps {
  city: string
  point: string
  option: string
}

export interface ChangePageAction {
  type: 'CHANGE_PAGE'
  payload: string
  [key: string]: string
}

export interface Car {
  id: number
  name: string
  price: string
  img: string
}
