import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactWeather from 'react-open-weather';
import './App.css'; // Importiere die CSS-Datei für das Styling
import IconTest from './components/IconTest';
import Yoink from './components/yoink/Yoink';
import WeatherComponent from './components/wettercomponents/WeatherComponent';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '7856ee78fc1f5695adb17d5f75a9e338'; // Dein API-Schlüssel

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=52.4991262&lon=13.3702779&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [apiKey]);

  // Formatierung der Wetterdaten für die ReactWeather-Komponente
  const formatWeatherData = (data) => {
    if (!data) return null;

    return {
      current: {
        date: new Date().toLocaleDateString(),
        description: data.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
        temperature: {
          current: data.list[0].main.temp.toFixed(0),
          min: data.list[0].main.temp_min.toFixed(0),
          max: data.list[0].main.temp_max.toFixed(0),
        },
        wind: data.list[0].wind.speed.toFixed(1),
        humidity: data.list[0].main.humidity,
      },
      forecast: data.list.slice(1, 6).map((item) => ({
        date: new Date(item.dt * 1000).toLocaleDateString(),
        description: item.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        temperature: {
          min: item.main.temp_min.toFixed(0),
          max: item.main.temp_max.toFixed(0),
        },
        wind: item.wind.speed.toFixed(1),
        humidity: item.main.humidity,
      })),
    };
  };

  const formattedData = formatWeatherData(weatherData);

  return (
    <div className="weather-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <>
          <h1>Hallo folgendes ist mein Dummy</h1>
          <Yoink />
          <IconTest />
          {/* Wetterdaten für die ReactWeather-Komponente */}
          {/* <ReactWeather
            data={formattedData}
            isLoading={isLoading}
            errorMessage={error}
            lang="en"
            locationLabel="Munich"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
            theme={{
              fontFamily: 'Helvetica, sans-serif',
              gradientStart: '#0181C2',
              gradientMid: '#04A7F9',
              gradientEnd: '#4BC4F7',
              locationFontColor: '#FFF',
              todayTempFontColor: '#FFF',
              todayDateFontColor: '#B5DEF4',
              todayRangeFontColor: '#B5DEF4',
              todayDescFontColor: '#B5DEF4',
              todayInfoFontColor: '#B5DEF4',
              todayIconColor: '#FFF',
              forecastBackgroundColor: '#FFF',
              forecastSeparatorColor: '#DDD',
              forecastDateColor: '#777',
              forecastDescColor: '#777',
              forecastRangeColor: '#777',
              forecastIconColor: '#4BC4F7',
            }}
          /> */}

          {/* Füge hier die WetterComponent hinzu */}
          {formattedData && (
            <WeatherComponent data={weatherData} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
