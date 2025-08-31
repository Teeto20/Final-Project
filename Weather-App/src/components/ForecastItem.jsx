function ForecastItem({ data }) {
  const date = new Date(data.dt * 1000);
  const icon = data.weather[0].icon;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4 w-28 text-center">
      <p className="text-sm">{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather"
        className="mx-auto"
      />
      <p className="text-sm">{Math.round(data.main.temp_max)}° / {Math.round(data.main.temp_min)}°</p>
    </div>
  );
}

export default ForecastItem;
