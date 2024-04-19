export interface GeoData {
  response: {
    GeoObjectCollection: {
      featureMember: {
        GeoObject: {
          Point: {
            pos: string
          }
        }
      }[]
    }
  }
}
