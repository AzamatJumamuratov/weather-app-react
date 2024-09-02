import Carousel from "../../Leaf Components/Carousel";
import sun_icon from "/Weather/sun-icon.svg";
import cloud_sun_icon from "/Weather/cloud-sun.svg";
import cloud from "/Weather/cloud.svg";
import cloud_rain from "/Weather/cloud-rain.svg";
import rain_shower_heavy from "/Weather/cloud-showers-heavy.svg";
import snow from "/Weather/snow.svg";

export default function WeatherDisplay({ weatherData }) {
  let currentTime = new Date().getHours();
  let targetSlide;

  const temperatures = new Map();
  weatherData.hourly.time.forEach((timeString, i) => {
    let timeHours = new Date(timeString).getHours();

    if (timeHours == currentTime) {
      targetSlide = i;
    }

    let timeKey = timeHours < 10 ? "0" + timeHours : String(timeHours);
    timeKey += ":00";
    temperatures.set(timeKey, weatherData.hourly.temperature_2m[i]);
  });

  return (
    <>
      <Carousel
        data={{
          temperatures,
          weather_code: weatherData.hourly.weather_code.map((code) => {
            return GetIconByCode(code);
          }),
          wind_speed: weatherData.hourly.wind_speed_10m,
          targetSlide,
        }}
      />
    </>
  );

  function GetIconByCode(code) {
    switch (code) {
      case 0:
        return sun_icon;
      case 1:
      case 2:
        return cloud_sun_icon;
      case 3:
        return cloud;
      case 51:
      case 53:
      case 56:
      case 61:
      case 63:
      case 66:
      case 80:
        return cloud_rain;
      case 55:
      case 57:
      case 65:
      case 67:
      case 81:
      case 82:
        return rain_shower_heavy;
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return snow;
    }
  }
}
