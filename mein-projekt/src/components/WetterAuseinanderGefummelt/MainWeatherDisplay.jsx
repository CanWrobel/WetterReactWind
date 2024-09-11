import React from 'react';

const MainWeatherDisplay = ({ weather }) => {
  return (
    <div className="rw-container-main">
      <div className="rw-container-left">
        <h2 className="rw-container-header">Munich</h2>
        <div className="rw-today css-w3t7ie">
          <div className="rw-today-date">{weather.date}</div>
          <div className="rw-today-hr"></div>
          <div className="rw-today-current">{weather.temp}°C</div>
          <div className="rw-today-range">
            {weather.temp_min}°C / {weather.temp_max}°C
          </div>
          <div className="rw-today-desc">{weather.description}</div>
          <div className="rw-today-hr"></div>
          <div className="rw-today-info">
            <div>Wind: <b>{weather.wind} Km/h</b></div>
            <div>Pressure: <b>{weather.pressure} hPa</b></div>
          </div>
        </div>
      </div>
      <div className="rw-container-right">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          width="120"
          height="120"
        />
      </div>
    </div>
  );
};

export default MainWeatherDisplay;
