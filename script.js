const titles = document.querySelectorAll(".acc-title");

titles.forEach(function (title) {
  title.addEventListener("click", function () {
    title.parentElement.classList.toggle("open");
  });
});

const items = document.querySelectorAll("#news-list li");
const moreBtn = document.getElementById("more-btn");
const SHOW_COUNT = 3;

items.forEach(function (item, index) {
  if (index >= SHOW_COUNT) {
    item.classList.add("hidden");
  }
});

if (items.length <= SHOW_COUNT) {
  moreBtn.style.display = "none";
}

moreBtn.addEventListener("click", function () {
  items.forEach(function (item) {
    item.classList.remove("hidden");
  });
  moreBtn.style.display = "none";
});