import { RateDataidPriceName } from '../../interface/Interface'

const helpers = (
  activeCar: { color: string[] },
  rateDateApi: RateDataidPriceName[],
) => {
  const activeColors = activeCar.color.map(
    (carColor: string, index: number) => ({
      text: carColor,
      marker: carColor,
      id: index,
    }),
  )

  const activeRate = rateDateApi.map((rateDataidPriceName) => ({
    id: rateDataidPriceName.id,
    price: Number(rateDataidPriceName.price),
    text: `${rateDataidPriceName.rateTypeId.name}, ${rateDataidPriceName.price} ₽`,
    marker: rateDataidPriceName.rateTypeId.name,
  }))

  return { activeRate, activeColors }
}

export default helpers
