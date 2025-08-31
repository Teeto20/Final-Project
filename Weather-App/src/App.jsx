import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import DarkModeToggle from "./components/DarkModeToggle";
const API_KEY = "12ab8fa8a5ce7fa5263a11edab59204a"; // replace with your OpenWeatherMap key

function App() {
  const [city, setCity] = useState("Cairo");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch current weather
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Fetch 5-day forecast
  const fetchForecast = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      // Get daily forecast (filter every 8th item)
      const daily = data.list.filter((item, index) => index % 8 === 0);
      setForecast(daily);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6">
      <DarkModeToggle />
      <h1 className="text-2xl font-bold my-4">Weather App</h1>

      <SearchBar onSearch={(newCity) => setCity(newCity)} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      {forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default App;
