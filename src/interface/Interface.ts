/* eslint-disable no-shadow */
export interface InputCityProps {
  city: string
  point: string
  address: string
  option: string
}

export interface ChangePageAction {
  type: 'CHANGE_PAGE'
  payload: string
  [key: string]: string
}

export interface OrderProps {
  currentPages: string
  activeCar: {
    name: string
    priceMin: string
  }
}
export interface NamesBtn {
  [key: string]: string
}

export interface CarApi {
  id: number
  priceMax: number
  priceMin: number
  name: 'string'
  description: 'string'
  colors: ['string']
  number: string
  categoryId: {
    idCategory: number
    name: string
  }
  thumbnail: {
    path: string
  }
}

export interface CarCategory {
  id: number
  name: string
}

export interface InitialStateCar {
  activePoint: {
    [key: string]: boolean
  }
  filterCar: CarApi[]
  activeCar: {
    id: number | null
    name: string
    markNumber: string
    img: string
    priceMin: number
    priceMax: number
    color: []
  }
}

export interface InputRatesDate {
  start: string
  end: string
}

export interface InitialStateAdditionally {
  activePointColor: {
    [key: string]: boolean
  }
  activePointRate: {
    rateText: boolean
    ratePrice: number
  }
  activePointOptions: {
    tank: boolean
    seat: boolean
    wheel: boolean
    [key: string]: boolean
  }
}

export interface RateTypeId {
  id: number
  name: string
  unit: string
}

export interface Rate {
  id: number
  price: number
  rateTypeId: RateTypeId
}

export interface PopupTotal {
  onClose: () => void
}

export interface RouteData {
  pathname: string
  cityAndPoint: boolean
  activeCarConst: boolean
  startEnd: boolean
  color: boolean
  rate: boolean
}

export interface InitialStateModalTotal {
  activeButtonModal: {
    confirm: boolean
    back: boolean
  }
}

export interface City {
  id: string
  name: string
}

export interface Point {
  id: string
  name: string
  cityId: City | null
  address: string
}

export interface LocationsState {
  cities: City[]
  points: Point[]
  rate: Rate[]
  isLoading: boolean
  error: string | null
}

export enum EPath {
  '/' = '/LocationPage',
  '/LocationPage' = '/ModelCar',
  '/ModelCar' = '/Additionally',
  '/Additionally' = '/Total',
}
