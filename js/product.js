let chosenSize = "";

const sizes = document.querySelectorAll(".size-btn");

sizes.forEach((button) => {
  button.addEventListener("click", function () {
    chosenSize = button.innerText;
  });
});

document.getElementById("addBag").addEventListener("click", function () {
  localStorage.setItem("size", chosenSize);

  window.location.href = "checkout.html";
});
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // remove active class from all buttons
    sizeButtons.forEach((btn) => btn.classList.remove("active"));

    // add active class to clicked button
    button.classList.add("active");
  });
});