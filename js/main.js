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

document.addEventListener("DOMContentLoaded", () => {
  const sizeItems = document.querySelectorAll(".size-item");

  sizeItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("clicked:", item.innerText);

      sizeItems.forEach((s) => s.classList.remove("selected"));

      item.classList.add("selected");
    });
  });
});
