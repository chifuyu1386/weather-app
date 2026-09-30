import { useState} from "react";
import { getWeatherByCity } from "./services/weatherApi";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(cityName) {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const data = await getWeatherByCity(cityName);

      setWeather(data)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
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

          {loading && (
            <div className="status-card">
              <div className="loader"></div>
              <p>Loading weather...</p>
            </div>
          )}

          {error && !loading && (
            <div className="status-card error">
              <div className="error-icon">⚠️</div>
              <h3>Something went wrong</h3>
              <p>{error}</p>
              <span>Try searching for another city.</span>
            </div>
          )}

          {!loading && !error && (
            <WeatherCard weather={weather} />
          )}
        
      </div>
    </main>
  );
}

export default App;