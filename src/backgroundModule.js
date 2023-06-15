const backgroundModule = (() => {
  let backgroundData = {
    imageURL:
      "https://unsplash.com/photos/mBQIfKlvowM/download?ixid=M3w0NTUzNDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU4MjA0MzN8",
    photographerName: "Quino Al",
    photographerLink: "https://unsplash.com/photos/mBQIfKlvowM",
  };
  async function getBackgroundData() {
    const topic = "nature";
    const myQuery = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&query=${topic}&orientation=landscape`;
    const response = await fetch(myQuery);
    const photoData = await response.json();
    const imageURL = photoData.links.download;
    const photographerName = photoData.user.name;
    const photographerLink = photoData.links.html;
    return { imageURL, photographerName, photographerLink };
  }
  function setBackground(backgroundData) {
    const imageURL = `url(${backgroundData.imageURL})`;
    const bgContainer = document.body.querySelector(".bg-container");
    bgContainer.style.backgroundImage = imageURL;
  }

  function updateBackgroundInfo(backgroundData) {
    const bgInfo = document.querySelector(".bg-info");
    bgInfo.innerHTML = `
    Photo by <a href="${backgroundData.photographerLink}">${backgroundData.photographerName}</a>
    `;
  }

  async function main() {
    // backgroundData = await getBackgroundData().catch();
    setBackground(backgroundData);
    updateBackgroundInfo(backgroundData);
    console.log("I ran.");
  }

  main();
})();

export default backgroundModule;
