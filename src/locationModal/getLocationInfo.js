async function getLocationInfo(lat, lon) {
  const queryURL = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
  console.log(queryURL);
  const response = await fetch(queryURL);
  const data = await response.json();
  return data;
}

export default getLocationInfo;
