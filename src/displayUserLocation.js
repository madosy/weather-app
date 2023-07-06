import locationModal from "./locationModal";

import locationIcon from "./assets/location-icon.svg";
const icon = document.createElement("img");
icon.src = locationIcon;
const iconContainer = document.querySelector(".location span.icon");
iconContainer.appendChild(icon);

const isLocationNotSet =
  localStorage.getItem("madosy_weather_app.lat") === null;
if (isLocationNotSet) {
  localStorage.setItem("madosy_weather_app.cityName", "Atlanta, GA");
  localStorage.setItem("madosy_weather_app.lat", "33.753746");
  localStorage.setItem("madosy_weather_app.lon", "-84.386330");
}

const userLocation = localStorage.getItem("madosy_weather_app.cityName");
const userLocationContainer = document.querySelector(
  ".location .user-location"
);
userLocationContainer.innerText = userLocation;

const location = document.querySelector(".location");
location.addEventListener("click", () => {
  locationModal.showModal();
});
