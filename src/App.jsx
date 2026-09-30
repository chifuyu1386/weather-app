import { useState} from "react";
import { getWeatherByCity } from "./services/weatherApi";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  async function handleSearch(cityName) {
    try {
      const data = await getWeatherByCity(cityName);

      setWeather(data)
      
    } catch (err) {
      console.error(err)

    }
  }

  return (
    <main className="app">
      <div className="weather-container">

        <header className="app-header">
          <p className="eyebrow">WEATHER APP</p>

          <p className="subtitle">
            Search for a city and get the latest weather information.
          </p>
        </header>

        <SearchBar onSearch={handleSearch} />

        <WeatherCard weather={weather} />

      </div>
    </main>
  );
}

export default App;