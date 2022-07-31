import { useWeather } from "./WeatherContext";
import React from "react";
import Citys from "./Citys";
import Days from "./Days";
import Card from "./Card";
import TodayCard from "./TodayCard";
function Container() {
  const { isDark, setIsDark, isCelcius, setIsCelcius  } = useWeather();
  return (
    <div >
      <div >
      <Citys/>
      <br/>
      <TodayCard/>
      <br/>
      <br/>
      <Card/>
      </div>

      <div className="bg-green-500 md:bg-yellow-500 lg:bg-blue-500">hellooo</div>
  
    </div>
  );
}

export default Container;