import findLocation from "./findLocation";
import getLocationInfo from "./getLocationInfo";

const locationModal = (() => {
  const modal = document.body.querySelector("dialog.location");
  const button = document.body.querySelector("button.location");
  const form = document.body.querySelector("form");
  const input = form.querySelector("input");

  button.addEventListener("click", () => {
    modal.showModal();
  });

  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userInput = modal.querySelector("input.location");
    const foundLocations = await findLocation(userInput.value);
    const locationInfo = await getLocationInfo(
      foundLocations[0].lat,
      foundLocations[0].lon
    );
    console.log(userInput.value);
    console.log(foundLocations);
    console.log(locationInfo);
  });
})();

export default locationModal;
