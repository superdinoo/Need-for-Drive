import store from './Store'

export type MapState = {
  center: [number, number]
  point: [number, number]
}

export type RootState = ReturnType<typeof store.getState>
