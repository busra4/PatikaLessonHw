import { useWeather } from "./WeatherContext";
import Select from "react-select";
import { useState } from "react";
function Card() {
  const { city, setCity, JsonCity, weatherData, days } = useWeather();
  const [value, setValue] = useState();
  function handleSelect(e) {
    JsonCity.filter((ct) => ct.name === e && setCity(ct));
    console.log(city);
  }

  return (
    <div className="">
      {" "}
      <h1 className=" text-center font-mono text-lg underline">DAILY VALUES</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 lg:gap-2 space-x-3  p-2 md:justify-items-center place-items-center">
        {weatherData &&
          weatherData.map((item, idx) => (
            <li
              className=" text-white p-4 rounded-lg list-none font-mono 
              bg-gradient-to-b from-green-400 to-emerald-500 hover:from-gray-700 hover:to-gray-900
              "
              key={idx}
            >
              <span>{days.long[new Date(item.dt * 1000).getDay()]}</span>

              <img
                className="object-scale-down h-48 w-96 object-center"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon-01n"
              />

              <div>
                <span>{item.weather[0].description.substring(0, 5)}</span>&nbsp;
                <span>{Math.floor(item.temp.max)}°</span>
                <br />
                <span>
                  Sunrise Time&nbsp;
                  {new Date(item.sunrise * 1000).toLocaleTimeString("tr-TR")}
                </span>
                <br></br>
                <span>
                  Feels Like:&nbsp;
                  {Math.floor(item.feels_like.day)}°
                </span>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}

export default Card;
