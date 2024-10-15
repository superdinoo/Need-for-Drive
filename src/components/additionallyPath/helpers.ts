import { createSelector } from '@reduxjs/toolkit'
import { RateDataidPriceName } from '../../interface/Interface'

export const selectColorItems = createSelector(
  (activeCar: { color: string | string[] }) => {
    return Array.isArray(activeCar.color) ? activeCar.color : [activeCar.color]
  },
  (colors) => {
    return colors.map((color, id) => ({
      id,
      text: color,
      marker: color,
      price: undefined,
    }))
  },
)
export const selectRateItems = createSelector(
  (rateDateApi: RateDataidPriceName[]) => rateDateApi,
  (rateDateApi) =>
    rateDateApi.map((rateData) => ({
      id: rateData.id,
      price: Number(rateData.price),
      text: `${rateData.rateTypeId.name}, ${rateData.price} ₽`,
      marker: rateData.rateTypeId.name,
    })),
)

const useAdditionally = (
  activeCar: { color: string[] },
  rateDateApi: RateDataidPriceName[],
) => {
  const activeColors = selectColorItems(activeCar)
  const activeRate = selectRateItems(rateDateApi)

  return { activeRate, activeColors }
}

export default useAdditionally
