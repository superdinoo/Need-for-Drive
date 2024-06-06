/* eslint-disable no-shadow */
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
  price: number
  img: string
  markNumber: string
  priceCart: string
}

export interface OrderProps {
  currentPages: string
  activeCar: {
    name: string
    price: number
    priceCart: string
  }
}
export interface NamesBtn {
  [key: string]: string
}
export interface FilterCar {
  id: number
  name: string
  price: number
  img: string
  type: string
  markNumber: string
  priceCart: string
}

export interface InitialStateCar {
  activePoint: {
    all: boolean
    eco: boolean
    premium: boolean
  }
  filterCar: FilterCar[]
  activeCar: {
    id: number | null
    name: string
    price: number
    markNumber: string
    priceCart: string
    img: string
  }
}

export interface InputRatesDate {
  start: string
  end: string
}

export interface InitialStateAdditionally {
  activePointColor: {
    any: boolean
    red: boolean
    blue: boolean
  }
  activePointRate: {
    everyMinute: boolean
    forADay: boolean
  }
  activePointOptions: {
    tank: boolean
    seat: boolean
    wheel: boolean
  }
}

export interface PopupTotal {
  onClose: boolean
}

export interface RouteData {
  pathname: string
  cityAndPoint: boolean
  activeCarConst: boolean
  startEnd: boolean
  color: boolean
  rate: boolean
}

export enum EPath {
  '/' = '/LocationPage',
  '/LocationPage' = '/ModelCar',
  '/ModelCar' = '/Additionally',
  '/Additionally' = '/Total',
}
