document.addEventListener("DOMContentLoaded", () => {
  const timeDiv = document.getElementById("time");
  const modeButton = document.getElementById("mode");
  const increaseButton = document.getElementById("increase");
  const lightButton = document.getElementById("light");

  function updateTime() {
    fetch("/time")
      .then((response) => response.text())
      .then((time) => {
        timeDiv.innerHTML = time;
      });
  }

  function toggleMode() {
    fetch("/toggleMode");
    updateTime();
  }

  function increaseTime() {
    fetch("/increaseTime");
    updateTime();
  }

  function toggleLight() {
    fetch("/toggleLight")
      .then((response) => response.text())
      .then((night_mode_on) => {
        if (night_mode_on === "true") {
          timeDiv.style.color = "red";
        } else {
          timeDiv.style.color = "black";
        }
      });
  }

  modeButton.addEventListener("click", toggleMode);
  increaseButton.addEventListener("click", increaseTime);
  lightButton.addEventListener("click", toggleLight);

  updateTime();
});
