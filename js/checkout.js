// get saved size
const savedSize = localStorage.getItem("size");

// show it on page
document.getElementById("dressSize").innerText = "Size: " + savedSize;
