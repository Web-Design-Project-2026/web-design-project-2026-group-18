let chosenSize = "";

const sizes = document.querySelectorAll(".size-btn");
const cartOverlay = document.getElementById("cartOverlay");
const addBag = document.getElementById("addBag");

// SIZE BUTTONS
sizes.forEach((button) => {
  button.addEventListener("click", () => {
    chosenSize = button.innerText;

    // remove active class
    sizes.forEach((btn) => btn.classList.remove("active"));

    // add active class
    button.classList.add("active");
  });
});

// ADD TO BAG
addBag.addEventListener("click", () => {
  localStorage.setItem("size", chosenSize);

  // open cart overlay
  cartOverlay.style.display = "block";
});

// CLOSE OVERLAY WHEN CLICKING OUTSIDE
cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) {
    cartOverlay.style.display = "none";
  }
});
