import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'
import { selectActivePoint } from '../selectors'

const filteredCars = createSelector(
  (state: RootState) => state.apiSwagger.carsAll,
  (state: RootState) => selectActivePoint(state),
  (cars, activePoint) => {
    const selectedCategory = activePoint.category
    if (selectedCategory === 'Все модели' || !selectedCategory) {
      return cars
    }
    return cars.filter((car) => car.categoryId.name === selectedCategory)
  },
)

export default filteredCars
