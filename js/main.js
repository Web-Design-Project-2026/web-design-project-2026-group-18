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
