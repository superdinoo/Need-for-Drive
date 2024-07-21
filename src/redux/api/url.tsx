const generateGeocodeUrl = (city: string, address: string): string => {
  return `https://geocode-maps.yandex.ru/1.x?geocode=${city}+${address}&apikey=027a4a64-58cd-4305-9094-19f87e203671&sco=longlat&format=json`
}

export default generateGeocodeUrl
