document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-button");
  const dropdown = document.querySelector(".dropdown-menu");

  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", function () {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bagButton = document.querySelector(".bag button");
  const cartOverlay = document.getElementById("cartOverlay");

  bagButton.addEventListener("click", function (event) {
    event.stopPropagation();
    cartOverlay.style.display = "block";
  });

  cartOverlay.addEventListener("click", function (event) {
    if (event.target === cartOverlay) {
      cartOverlay.style.display = "none";
    }
  });
});



