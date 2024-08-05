import { CarApi, CarCategory, Rate } from 'interface/Interface'
import store from './Store'

export type MapState = {
  center: [number, number]
  address: [number, number]
}

export type SwaggerState = {
  city: [string, string]
  point: [string, string]
  rate: Rate[]
  carsAll: CarApi[]
  categoryCars: CarCategory[]
}

export type RootState = ReturnType<typeof store.getState>
