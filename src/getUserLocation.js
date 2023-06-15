function getUserLocation() {
  const x = document.querySelector(".location");
  const response = navigator.geolocation.getCurrentPosition(
    handleSuccess,
    handleError
  );

  function handleSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log({ latitude, longitude });
  }

  function handleError(error) {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function getCityName(latitude, longitude) {
  const query = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  const response = await fetch(query);
  const locationData = await response.json();
  console.log(locationData);
}
