function WeatherCard({ weather }) {
  const { name, main, weather: details, wind } = weather;
  const icon = details[0].icon;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{new Date().toLocaleDateString()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto"
      />
      <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
      <div className="flex justify-around mt-4 ">
        <div>
          <p className="text-sm">💧 {main.humidity}%</p>
          <p className="text-xs">Humidity</p>
        </div>
        <div>
          <p className="text-sm">🌬 {wind.speed} m/s</p>
          <p className="text-xs">Wind</p>
        </div>
        <div>
          <p className="text-sm">🌡 {Math.round(main.feels_like)}°C</p>
          <p className="text-xs">Feels like</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
