import ForecastItem from "./ForecastItem";

function ForecastList({ forecast }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-6 w-full max-w-md mx-auto text-center">
      <h3 className="font-semibold mb-4">5-Day Forecast</h3>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {forecast.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ForecastList;
