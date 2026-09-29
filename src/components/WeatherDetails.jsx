function WeatherDetails() {
  return (
    <div className="weather-details">

      <div className="detail">
        <span className="detail-icon">💧</span>

        <div>
          <p>Humidity</p>
          <strong>42%</strong>
        </div>
      </div>

      <div className="detail">
        <span className="detail-icon">💨</span>

        <div>
          <p>Wind</p>
          <strong>12 km/h</strong>
        </div>
      </div>

      <div className="detail">
        <span className="detail-icon">🌡️</span>

        <div>
          <p>Feels like</p>
          <strong>23°C</strong>
        </div>
      </div>

    </div>
  );
}

export default WeatherDetails;