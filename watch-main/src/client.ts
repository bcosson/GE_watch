document.addEventListener("DOMContentLoaded", () => {
  const timeDiv = document.getElementById("time");
  const modeButton = document.getElementById("mode");
  const increaseButton = document.getElementById("increase");
  const lightButton = document.getElementById("light");

  function updateTime() {
    fetch("/time")
      .then((response) => response.text())
      .then((time) => {
        timeDiv.textContent = time;
        console.log(time);
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
    fetch("/toggleLight");
  }

  modeButton.addEventListener("click", toggleMode);
  increaseButton.addEventListener("click", increaseTime);
  lightButton.addEventListener("click", toggleLight);

  updateTime();
});
