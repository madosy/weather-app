import icon from "./assets/weather-icon/thunderstorm.png";
const weatherSplash = document.querySelector(".weather-splash");

const weatherIcon = document.createElement("img");
weatherIcon.src = icon;
weatherSplash.appendChild(weatherIcon);
