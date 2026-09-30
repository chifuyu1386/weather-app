const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCity(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found")
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  }
}

