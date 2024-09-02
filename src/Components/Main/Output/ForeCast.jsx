import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Spinner from "../../Leaf Components/Spinner";

export default function ForeCast({ DataToFetch }) {
  const [spinner, SetSpinner] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (DataToFetch != undefined) {
      SetSpinner(true);
      fetchData();
    }
  }, [DataToFetch]);

  return (
    <div id="forecast" className="mt-8 mb-8">
      <div className="mx-12">
        <h2 className="text-3xl text-center text-slate-700 p-4">Result</h2>
        {forecast == undefined && !spinner ? (
          <div className="flex justify-center items-center p-4 mb-4 h-96 border-slate-700 border rounded">
            Nothing. Search For Weather
          </div>
        ) : spinner ? (
          <div className="flex justify-center items-center p-4 mb-4 h-96 border-slate-700 border rounded">
            <Spinner />
          </div>
        ) : (
          <WeatherDisplay weatherData={forecast} />
        )}
      </div>
    </div>
  );

  async function fetchData() {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${DataToFetch.latitude}&longitude=${DataToFetch.longitude}&hourly=temperature_2m,weather_code,wind_speed_10m&forecast_days=1&wind_speed_unit=ms`
    );
    let decodedValue = await response.json();
    SetSpinner(false);
    setForecast(decodedValue);
  }
}
