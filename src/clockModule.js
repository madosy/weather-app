const clockModule = (() => {
  function getCurrentTime() {
    const myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let period = "AM";
    let message = "Good morning.";

    if (hours >= 12 && hours < 18) {
      message = "Good afternoon.";
    } else if (hours > 18 || hours < 5) {
      message = "Good evening.";
    }

    if (hours >= 12) {
      period = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }

    if (hours == 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return { message, time: `${hours}:${minutes} ${period}` };
  }

  function updateTimeDisplay() {
    const greeting = document.body.querySelector(".app-container .greeting");
    const time = document.body.querySelector(".app-container .time");
    const data = getCurrentTime();
    greeting.innerText = data.message + " It's currently";
    time.innerText = data.time;
  }

  updateTimeDisplay();

  setInterval(() => {
    updateTimeDisplay();
  }, 10000);

  return { getCurrentTime };
})();

export default clockModule;
