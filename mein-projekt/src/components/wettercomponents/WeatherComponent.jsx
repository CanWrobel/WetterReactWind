import React from 'react';

const WeatherComponent = ({ data }) => {
  // Hilfsfunktion, um Datum in lesbare Form zu formatieren
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  // Hilfsfunktion, um Uhrzeit in lesbare Form zu formatieren
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Erstelle eine Liste der stündlichen Vorhersagen für heute
  const todayForecast = data.list.filter((item) => {
    const itemDate = new Date(item.dt * 1000);
    const today = new Date();
    return itemDate.toDateString() === today.toDateString();
  });

  return (
    <div className="rw-container-main">
      <div className="rw-container-left">
        <h2 className="rw-container-header">Munich</h2>
        <div className="rw-today css-w3t7ie">
          <div className="rw-today-date">{formatDate(data.list[0].dt)}</div>
          <div className="rw-today-hr"></div>
          <div className="rw-today-current">{data.list[0].main.temp.toFixed(0)}°C</div>
          <div className="rw-today-range">
            {data.list[0].main.temp_min.toFixed(0)}°C / {data.list[0].main.temp_max.toFixed(0)}°C
          </div>
          <div className="rw-today-desc">{data.list[0].weather[0].description}</div>
          <div className="rw-today-hr"></div>
          <div className="rw-today-info">
            <div>Wind: <b>{data.list[0].wind.speed.toFixed(1)} Km/h</b></div>
            <div>Pressure: <b>{data.list[0].main.pressure} hPa</b></div>
          </div>
        </div>
      </div>
      <div className="rw-container-right">
        <img
          src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
          alt={data.list[0].weather[0].description}
          width="120"
          height="120"
        />
      </div>
      <div className="rw-forecast-days-panel css-evb4g3">
        {todayForecast.map((item) => (
          <div key={item.dt} className="rw-forecast-day">
            <div className="rw-forecast-date">{formatTime(item.dt)}</div>
            <div className="rw-forecast-icon">
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                width="120"
                height="120"
              />
            </div>
            <div className="rw-forecast-desc">{item.weather[0].description}</div>
            <div className="rw-forecast-range">
              {item.main.temp_min.toFixed(0)}°C / {item.main.temp_max.toFixed(0)}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherComponent;
