export type MapState = {
  center: [number, number]
  point: [number, number] | null
}

export type RootState = {
  map: MapState
}
