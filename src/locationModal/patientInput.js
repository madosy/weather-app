const patientInputGenerator = (callbackFn, timeoutValue = 1000) => {
  let timer,
    timeoutVal = timeoutValue;
  const input = document.createElement("input");
  input.addEventListener("keypress", keyPressHandler);
  input.addEventListener("keyup", keyUpHandler);

  function keyPressHandler() {
    window.clearTimeout(timer);
  }

  function keyUpHandler(e) {
    window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
    timer = window.setTimeout(() => {
      callbackFn(); //do stuff when no input registered for 1s
    }, timeoutVal);
  }

  return input;
};

export default patientInputGenerator;
