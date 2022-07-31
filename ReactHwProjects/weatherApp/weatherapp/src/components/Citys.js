import { useWeather } from "./WeatherContext";

function Days() {
  const { city, setCity, JsonCity} = useWeather();
  const HandleChain = (e) => {
    JsonCity.filter((ct) => ct.name === e.target.value && setCity(ct));
  };
  return (
    <div className="select-box p-4 font-mono">
    
      <select className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="city" id="city" value={city.name} onChange={HandleChain}>
        {JsonCity.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
 
    </div>
  );
}

export default Days;