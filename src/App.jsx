import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";



function App() {
  return (
    <main className="app">
      <div className="weather-container">
        <header className="app-header">
          <p className="eyebrow">WEATHER APP</p>
          <p className="subtitle">
            Search for a city and get the latest weather information.
          </p>
        </header>

        <SearchBar />

        <WeatherCard />
      </div>
    </main>
  )
}

export default App;