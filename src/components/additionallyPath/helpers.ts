import { RateDataidPriceName } from '../../interface/Interface'

interface ItemParam {
  id: number
  text: string
  marker: string
  price?: number | undefined
}
const createSelector = (
  data: ItemParam[],
  text: (item: ItemParam) => string,
  marker: (item: ItemParam) => string,
  price?: (item: ItemParam) => number,
): ItemParam[] => {
  return data.map((item) => ({
    id: item?.id ?? null,
    text: text(item),
    marker: marker(item),
    price: price?.(item),
  }))
}

const useAdditionally = (
  activeCar: { color: string[] },
  rateDateApi: RateDataidPriceName[],
) => {
  const colorItems: ItemParam[] = activeCar.color.map((color, id) => ({
    id,
    text: color,
    marker: color,
    price: undefined,
  }))

  const activeColors = createSelector(
    colorItems,
    (color) => color.text,
    (color) => color.marker,
  )

  const rateItems: ItemParam[] = rateDateApi.map((rateData) => ({
    id: rateData.id,
    price: Number(rateData.price),
    text: `${rateData.rateTypeId.name}, ${rateData.price} ₽`,
    marker: rateData.rateTypeId.name,
  }))

  const activeRate = createSelector(
    rateItems,
    (rate) => rate.text,
    (rate) => rate.marker,
    (rate) => rate.price ?? 0,
  )

  return { activeRate, activeColors }
}

export default useAdditionally
