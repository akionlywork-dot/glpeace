// ===== アコーディオン =====
const titles = document.querySelectorAll(".acc-title");

titles.forEach(function (title) {
  title.addEventListener("click", function () {
    title.parentElement.classList.toggle("open");
  });
});

const opening = document.querySelector(".opening");

if (opening) {
  if (sessionStorage.getItem("openingShown")) {
    opening.style.display = "none";
  } else {
    sessionStorage.setItem("openingShown", "true");
  }
}

