import { useWeather } from "./WeatherContext";
import Select from "react-select";
import { useState } from "react";
function TodayCard() {
  const { city, setCity, JsonCity, weatherData, days } = useWeather();
  const [value, setValue] = useState();
  function handleSelect(e) {
    JsonCity.filter((ct) => ct.name === e && setCity(ct));
    console.log(city);
  }

  return (
    <div className="">
      <div className=" text-white space-x-3  p-4 md:justify-items-center place-items-center font-mono">
        <div>
          {weatherData.slice(0, 1).map((item, index) => {
            return (
              <div key={index} className="flex flex-wrap">
                <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg w-1/3">
                  <span>{Math.floor(item.temp.max)}°</span>
                  <span>TODAY</span>
                  <hr />

                  <img
                    className="object-scale-down h-48 w-96 object-center"
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="icon-01n"
                  />

                  <span>{item.weather[0].description.substring(0, 5)}</span>

                  <span>{Math.floor(item.temp.day)}°</span>
                  <br />
                  <span>
                    Sunrise Time:&nbsp;
                    {new Date(item.sunrise * 1000).toLocaleTimeString("tr-TR")}
                  </span>
                  <br></br>
                  <span>
                    Feels Like:&nbsp;
                    {Math.floor(item.feels_like.day)}°
                  </span>
                </div>

                <div
                  className="w-2/7 list-none font-mono 
              bg-gradient-to-b from-green-400 to-emerald-500 hover:from-gray-700 hover:to-gray-900 ml-4 p-4  rounded-lg"
                >
                  <span>
                    <h3> Minimum Temperature:</h3>
                    {Math.floor(item.temp.min)}°C
                  </span>
                  <br />
                  <span>
                    <h3> Maximum Temperature:</h3> {Math.floor(item.temp.max)}°C
                  </span>
                  <br />
                </div>

                <div
                  className="w-2/7 list-none font-mono 
              bg-gradient-to-b from-green-400 to-emerald-500 hover:from-gray-700 hover:to-gray-900 ml-4 p-4  rounded-lg"
                >
                  <span>
                    <h3> Humidity:</h3> {item.humidity}%
                  </span>
                  <br />
                  <span>
                    <h3> Wind Speed:</h3> {item.wind_speed} km/h
                  </span>
                </div>

                <div
                  className="w-2/7 list-none font-mono 
              bg-gradient-to-b from-green-400 to-emerald-500 hover:from-gray-700 hover:to-gray-900 ml-4 p-4  rounded-lg"
                >
                  <span>
                    <h3> Sunrise Time: </h3>
                    {new Date(item.sunrise * 1000).toLocaleTimeString("tr-TR")}
                  </span>
                  <br />
                  <span>
                    <h3> Sunset Time: </h3>
                    {new Date(item.sunset * 1000).toLocaleTimeString("tr-TR")}
                  </span>
                </div>
                <div className="w-2/7 bg-green-400 ml-4 p-4  rounded-lg">
                  <span>
                    <h3> Detail:</h3> {item.weather[0].description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodayCard;

/*   <select name="city" id="city" value={city.name} onChange={HandleChain}>
        {JsonCity.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>*/
