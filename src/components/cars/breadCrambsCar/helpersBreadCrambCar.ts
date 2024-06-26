import { CarCategory } from 'interface/Interface'

const helpersBreadCrambCar = (category: CarCategory[]) => {
  const markerMap: { [key: string]: string } = {
    Бизнес: 'premium',
    Эконом: 'eco',
    Мототехника: 'bike',
    Спорт: 'sport',
  }

  const items = category.map((categoryItem) => ({
    text: categoryItem.name,
    marker: markerMap[categoryItem.name] || 'all',
    id: categoryItem.id,
  }))

  return { markerMap, items }
}

export default helpersBreadCrambCar
