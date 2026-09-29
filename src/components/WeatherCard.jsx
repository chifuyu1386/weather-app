import WeatherDetails from "./WeatherDetails";

function WeatherCard({ city }) {
  return (
    <section className="weather-card">

      <div className="weather-main">

        <div>
          <p className="location-label">
            CURRENT WEATHER
          </p>

          <h2>{city || "Search for a city"}</h2>

          <p className="weather-description">
            Clear sky
          </p>
        </div>

        <div className="weather-icon">
          ☀️
        </div>

      </div>

      <div className="temperature">
        24<span>°C</span>
      </div>

      <WeatherDetails />

    </section>
  );
}

export default WeatherCard;