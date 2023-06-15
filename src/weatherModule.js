const weatherModule = (() => {
  async function getWeatherData(lat, lon) {
    const myQuery = `https://api.weatherapi.com/v1/forecast.json?key=9fcbba83339a4ddd85a00447232405&q=${lat},${lon}&days=3&aqi=no&alerts=no`;
    const response = await fetch(myQuery);
    const weatherData = await response.json();
    return weatherData;
  }

  function displayCurrentWeatherIcon(weatherData) {
    const iconSrc = weatherData.current.condition.icon;
    const conditionIcon = document.body.querySelector(".condition-icon");
    conditionIcon.style.backgroundImage = `url(${iconSrc})`;
  }

  function updateCurrentWeather(weatherData) {
    const currentGrid = document.body.querySelector(".current-grid");
    const conditionIcon = currentGrid.querySelector(".condition-icon");
    const conditionName = currentGrid.querySelector(".condition-name");
    const temp = currentGrid.querySelector(".temperature > .data");
    const feelsLikeTemp = currentGrid.querySelector(".feels-like > .data");
    const wind = currentGrid.querySelector(".wind");
    conditionIcon.src = weatherData.current.condition.icon;
    conditionName.innerText = weatherData.current.condition.text;
    temp.innerText = weatherData.current.temp_f;
    feelsLikeTemp.innerText = weatherData.current.feelslike_f;
    wind.innerText = `${weatherData.current.wind_mph} mph`;
  }

  function updateForecast(weatherData) {
    const todayForecast = weatherData.forecast.forecastday[0];
    const tomorrowForecast = weatherData.forecast.forecastday[1];
    const dayAfterTomorrowForecast = weatherData.forecast.forecastday[2];

    const forecastGrid = document.body.querySelector(".forecast-grid");
    const todayIcon = forecastGrid.querySelector(".today > .icon");
    const todayHigh = forecastGrid.querySelector(".today > .high");
    const todayLow = forecastGrid.querySelector(".today > .low");
    const tomorrowIcon = forecastGrid.querySelector(".tomorrow > .icon");
    const tomorrowHigh = forecastGrid.querySelector(".tomorrow > .high");
    const tomorrowLow = forecastGrid.querySelector(".tomorrow > .low");
    todayIcon.src = todayForecast.day.condition.icon;
    todayHigh.innerText = todayForecast.day.maxtemp_f;
    todayLow.innerText = todayForecast.day.mintemp_f;
    tomorrowIcon.src = tomorrowForecast.day.condition.icon;
    tomorrowHigh.innerText = tomorrowForecast.day.maxtemp_f;
    tomorrowLow.innerText = tomorrowForecast.day.mintemp_f;
    const dayAfterTomorrowIcon = forecastGrid.querySelector(
      ".day-after-tomorrow > .icon"
    );
    const dayAfterTomorrowHigh = forecastGrid.querySelector(
      ".day-after-tomorrow > .high"
    );
    const dayAfterTomorrowLow = forecastGrid.querySelector(
      ".day-after-tomorrow > .low"
    );
    dayAfterTomorrowIcon.src = dayAfterTomorrowForecast.day.condition.icon;
    dayAfterTomorrowHigh.innerText = dayAfterTomorrowForecast.day.maxtemp_f;
    dayAfterTomorrowLow.innerText = dayAfterTomorrowForecast.day.mintemp_f;
  }

  async function displayWeatherData() {
    const lat = localStorage.getItem("madosy_weather_app.lat");
    const lon = localStorage.getItem("madosy_weather_app.lon");
    const weatherData = await getWeatherData(lat, lon);
    displayCurrentWeatherIcon(weatherData);
    updateCurrentWeather(weatherData);
    updateForecast(weatherData);
    console.log(weatherData);
  }

  return { displayWeatherData };
})();

export default weatherModule;
