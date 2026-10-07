// ===== アコーディオン =====
const titles = document.querySelectorAll(".acc-title");

titles.forEach(function (title) {
  title.addEventListener("click", function () {
    title.parentElement.classList.toggle("open");
  });
});

// ===== ニュース（もっと見る / 閉じる） =====
const newsItems = document.querySelectorAll("#news-list li");
const moreBtn = document.getElementById("more-btn");
const SHOW_COUNT = 3;
let isOpen = false;

function updateNews() {
  newsItems.forEach(function (item, index) {
    if (!isOpen && index >= SHOW_COUNT) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });

  moreBtn.textContent = isOpen ? "閉じる" : "もっと見る";
}

if (moreBtn) {
  if (newsItems.length <= SHOW_COUNT) {
    moreBtn.style.display = "none";
  }

  updateNews();

  moreBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    updateNews();
  });
}