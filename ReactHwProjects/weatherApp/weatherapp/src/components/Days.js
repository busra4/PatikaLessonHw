import { useWeather } from "./WeatherContext";
import Select from "react-select";
import { useState } from "react";
function Citys() {
  const { city, setCity, JsonCity,weatherData ,days} = useWeather();
  const [value, setValue] = useState();
  function handleSelect(e) {
    JsonCity.filter((ct) => ct.name === e && setCity(ct));
    console.log(city);
  }


  return (
    <div >
     
        {weatherData &&
          weatherData.map((item, idx) => (
            <li
              key={idx}>
              <span>
                {days.long[new Date(item.dt * 1000).getDay()]}
              </span>
            
              <img
                className="w-2/3"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon-01n"
              />
              <span >
              
           
            </span>
           
              <span >
              
                {item.weather[0].description.substring(0, 5)}
              </span>
              <span >
                {Math.floor(item.temp.max)}°
              </span>
             
              <span >
             saat
              {new Date(item.sunrise * 1000).toLocaleTimeString('tr-TR')}
              </span>
              <br></br>
              <span >
                feels like
                {Math.floor(item.feels_like.day)}°
              </span>
             

 
            </li>
          ))}
    
      
    </div>
  );
}

export default Citys;

/*   <select name="city" id="city" value={city.name} onChange={HandleChain}>
        {JsonCity.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>*/
