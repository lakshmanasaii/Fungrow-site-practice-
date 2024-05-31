document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById("revealButton");
  const hiddenMessage = document.getElementById("hiddenMessage");

  revealButton.addEventListener("click", function () {
    if (hiddenMessage.classList.contains("hidden")) {
      hiddenMessage.classList.remove("hidden");
    } else {
      hiddenMessage.classList.add("hidden");
    }
  });
});
