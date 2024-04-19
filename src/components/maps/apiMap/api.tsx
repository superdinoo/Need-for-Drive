const fetchData = async (city: string, point: string) => {
  try {
    const url = `https://geocode-maps.yandex.ru/1.x?geocode=${city}+${point}&apikey=027a4a64-58cd-4305-9094-19f87e203671&sco=longlat&format=json`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Ошибка при получении данных', error)
    throw error
  }
}

export default fetchData
