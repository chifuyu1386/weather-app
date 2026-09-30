import WeatherDetails from "./WeatherDetails";

function WeatherCard({ weather }) {
  if(!weather) {
    return (
      <section className="weather-card">
        <h2>Search for a city</h2>
      </section>
    )
  }

  return (
    <section className="weather-card">

      <div className="weather-main">

        <div>
          <p className="location-label">
            CURRENT WEATHER
          </p>

          <h2>{weather.city}</h2>

          <p className="weather-description">
            {weather.description}
          </p>
        </div>

        <div className="weather-icon">
          <img 
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          />
        </div>

      </div>

      <div className="temperature">
        {Math.round(weather.temperature)}
        <span>°C</span>
      </div>

      <WeatherDetails weather={weather}/>

    </section>
  );
}

export default WeatherCard;