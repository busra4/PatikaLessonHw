import "./App.css";
import Container from "./components/Container";
import { WeatherProvider } from "./components/WeatherContext";

function App() {
  return (
    <WeatherProvider >
      <div className="bg-cover bg-gradient-to-r from-green-100 to-lime-100">
      <Container  />
      </div>
    </WeatherProvider>
  );
}

export default App;