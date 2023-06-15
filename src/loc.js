async function getLocationSuggestions(input) {
  function checkUserInputType(input) {
    const numRegex = /^\d+$/;
    const letterRegex = /^[a-zA-Z ]*$/;
    if (input.match(numRegex)) return "postalcode";
    else if (input.match(letterRegex)) return "city";
    else return "q";
  }

  const inputType = checkUserInputType(input);
  const queryURL = `https://geocode.maps.co/search?${inputType}={${input}}`;

  const response = await fetch(queryURL);
  const list = await response.json();
  return list;
}

async function displaySuggestions(input) {
  const list = await getLocationSuggestions(input);
  const listDiv = document.body.querySelector("div.list");
  // const input = document.body.querySelector("input.location")
  const selectedLocationDiv = document.body.querySelector(
    "div.selected-location"
  );
  listDiv.innerHTML = "";
  list.forEach((location) => {
    const locationDiv = convertToLocationDiv(location);
    locationDiv.addEventListener("click", (e) => {
      listDiv.innerHTML = "";
      selectedLocationDiv.innerHTML = `Selected Location: `;
      selectedLocationDiv.appendChild(e.target);
    });
    listDiv.appendChild(locationDiv);
  });
}

function convertToLocationDiv(locObject) {
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location-item");
  locationDiv.dataset.lat = locObject.lat;
  locationDiv.dataset.lon = locObject.lon;
  locationDiv.innerText = locObject.display_name;
  return locationDiv;
}

let timer,
  timeoutVal = 1000;
const input = document.body.querySelector("input");
input.addEventListener("keypress", keyPressHandler);
input.addEventListener("keyup", keyUpHandler);

function keyPressHandler() {
  window.clearTimeout(timer);
  status.innerHTML = "Typing...";
}

function keyUpHandler(e) {
  window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
  timer = window.setTimeout(() => {
    const value = e.target.value;
    displaySuggestions(value);
  }, timeoutVal);
}
