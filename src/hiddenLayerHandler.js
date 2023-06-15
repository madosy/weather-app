const hiddenLayerHandler = (() => {
  const myButton = document.querySelector("button.move");
  const bgLayer = document.querySelector("div.bg-container");
  myButton.onclick = () => bgLayer.classList.toggle("move");
})();

export default hiddenLayerHandler;
