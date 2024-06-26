/* eslint-disable no-shadow */
export interface InputCityProps {
  city: string
  point: string
  cityId: number
  pointId: number
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
    rateId: number
  }
  activePointOptions: {
    tank: boolean
    seat: boolean
    wheel: boolean
    [key: string]: boolean
  }
  activeRentalPrice: {
    rentalPrice: number
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

export interface DateTimeFormatOptions {
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
  day?: 'numeric' | '2-digit'
  hour?: 'numeric' | '2-digit'
  minute?: 'numeric' | '2-digit'
}

export interface RateDataidPriceName {
  id: number
  price: number
  rateTypeId: {
    name: string
  }
}

export interface InputProps {
  value: string
  onChange: (value: string) => void
  name: string
  placeholder: string
  onReset: () => void
  labels: string
  list: string
}

export interface UseLocationInputProps {
  cities: City[]
  points: Point[]
  fetchCities: (query: string) => void
  fetchPoints: (query: string) => void
}

export interface OrderPost {
  id: 0
  orderStatusId: 0
  cityId: { id: number; name: string }
  pointId: { id: number; name: string }
  carId: { id: number; name: string }
  color: string
  dateFrom: number
  dateTo: number
  rateId: { id: number; name: string }
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}

export enum EPath {
  '/' = '/LocationPage',
  '/LocationPage' = '/ModelCar',
  '/ModelCar' = '/Additionally',
  '/Additionally' = '/Total',
}
