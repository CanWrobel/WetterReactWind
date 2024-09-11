import React from 'react';

const ForecastPanel = ({ forecast }) => {
  return (
    <div className="rw-forecast-days-panel css-evb4g3">
      {forecast.map((item) => (
        <div key={item.dt} className="rw-forecast-day">
          <div className="rw-forecast-date">{item.time}</div>
          <div className="rw-forecast-icon">
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
              width="120"
              height="120"
            />
          </div>
          <div className="rw-forecast-desc">{item.description}</div>
          <div className="rw-forecast-range">
            {item.temp_min}°C / {item.temp_max}°C
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastPanel;
