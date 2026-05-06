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
