import store from './Store'

export type MapState = {
  center: [number, number]
  address: [number, number]
}

export type RootState = ReturnType<typeof store.getState>
