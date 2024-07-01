import store from './Store'

export type MapState = {
  center: [number, number]
  address: [number, number]
}

export type SwaggerState = {
  city: [string, string]
  point: [string, string]
}

export type RootState = ReturnType<typeof store.getState>
