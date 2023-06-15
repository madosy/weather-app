async function findLocation(input) {
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

export default findLocation;
