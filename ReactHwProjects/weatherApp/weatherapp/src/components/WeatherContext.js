import JsonCity from "../data/CityData.json";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const initialValue = {
  id: 16,
  latitude: "40.2669",
  longitude: "29.0634",
  name: "Bursa",
  population: 2842547,
  region: "Marmara"
};
const api = {
  key: 'd50013276b8684ca4468ef7f45003230',
  base: 'https://api.openweathermap.org/data/2.5/'
};
const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(initialValue);
  const [oneCity, setOneCity] = useState([]);
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || "");
  const [isCelcius, setIsCelcius] = useState(
    localStorage.getItem("isCelcius") || "metric"
  );
  
  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    localStorage.setItem("isCelcius", isCelcius);
    const getWeatherData = async () => {
      try {
        const { data } = await axios.get(
          `${api.base}onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${api.key}`
        );
        setWeatherData(data.daily);
       
      } catch (error) {
        console.log(error.message);
      }
    };
    const getOneCity = async () => {
      try {
        const { data } = await axios.get(
          `${api.base}weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${api.key}`
        );
        setOneCity(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getWeatherData();
    getOneCity();
    
  }, [city,isDark, isCelcius]);

  const days = {
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    long: [
      "Sunday",
      "Monday",
      "Tuesday ",
      "Wednesday ",
      "Thursday ",
      "Friday ",
      "Saturday "
    ]
  };
  const values = {
    weatherData,
    setWeatherData,
    city,
    setCity,
    days,
    JsonCity,
    oneCity,
    setOneCity,
    isDark,
    setIsDark,
    isCelcius,
    setIsCelcius,
 
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);