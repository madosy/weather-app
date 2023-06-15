import "./style.scss";
import clockModule from "./clockModule";
import backgroundModule from "./backgroundModule";
import quoteModule from "./quoteModule";
import weatherModule from "./weatherModule";
import locationModal from "./locationModal";
import hiddenLayerHandler from "./hiddenLayerHandler";

window.APP_NAME = "MADOSY_WEATHER_APP";

const isLocationNotSet =
  localStorage.getItem("madosy_weather_app.lat") === null;
if (isLocationNotSet) {
  localStorage.setItem("madosy_weather_app.cityName", "Atlanta, GA");
  localStorage.setItem("madosy_weather_app.lat", "33.753746");
  localStorage.setItem("madosy_weather_app.lon", "-84.386330");
}

weatherModule.displayWeatherData();
