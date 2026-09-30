function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">

      <div className="detail">
        <span className="detail-icon">💧</span>

        <div>
          <p>Humidity</p>
          <strong>{weather.humidity}%</strong>
        </div>
      </div>

      <div className="detail">
        <span className="detail-icon">💨</span>

        <div>
          <p>Wind</p>
          <strong>{weather.windSpeed} m/s</strong>
        </div>
      </div>

      <div className="detail">
        <span className="detail-icon">🌡️</span>

        <div>
          <p>Feels like</p>
          <strong>{Math.round(weather.feelsLike)}°C</strong>
        </div>
      </div>

    </div>
  );
}

export default WeatherDetails;