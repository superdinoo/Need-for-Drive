import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'
import { selectActivePoint } from '../selectors'
import { CarApi } from '../../../interface/Interface'

const filteredCars = createSelector(
  (state: RootState) => state.apiSwagger.carsAll,
  (state: RootState) => selectActivePoint(state),

  (cars, activePoint) => {
    const selectedCategory = Object.keys(activePoint).find(
      (key) => activePoint[key],
    )
    if (selectedCategory === 'Все модели' || !selectedCategory) {
      return cars
    }
    return cars.filter(
      (car: CarApi) => car.categoryId.name === selectedCategory,
    )
  },
)

export default filteredCars
