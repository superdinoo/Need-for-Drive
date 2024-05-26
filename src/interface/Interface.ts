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

export interface OrderProps {
  currentPages: string
  activeCar: {
    name: string
    price: string
  }
}
export interface FilterCar {
  id: number
  name: string
  price: string
  img: string
  type: string
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
    price: string
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
