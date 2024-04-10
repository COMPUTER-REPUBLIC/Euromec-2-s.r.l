const checkbox = document.getElementById("privacy-checkbox");
const confirmButton = document.getElementById("confirm-button");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    confirmButton.value = "Inova";
  } else {
    confirmButton.value = "Conferma";
  }
});