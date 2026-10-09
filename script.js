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

const targets = document.querySelectorAll(".reveal");
// .reveal が付いた要素を全部集める

const observer = new IntersectionObserver(function (entries) {
  // 画面に入ったか見張る係を作る
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // 画面に入ったら
      entry.target.classList.add("is-visible");
      // 「見えた」クラスを付ける（CSSが動き出す）
      observer.unobserve(entry.target);
      // 一度出したら見張りをやめる
    }
  });
});

targets.forEach(function (target) {
  observer.observe(target);
  // 集めた要素を1つずつ見張りに登録
});

const MAX = 256;
// 増えすぎて重くならないよう上限を決める

document.addEventListener("click", function (e) {
  // 画面のどこをクリックしても反応を受け取る
  if (!e.target.classList.contains("peace-hand")) return;
  // ✌以外を押したら何もしない

  const count = document.querySelectorAll(".peace-hand").length;
  // 今、画面にある✌の数を数える
  if (count >= MAX) return;
  // 上限なら増やさない

  for (let i = 0; i < count; i++) {
    // 今の数と同じ回数だけ繰り返す（＝2倍になる）
    const copy = document.createElement("span");
    // 新しいspanを作る
    copy.className = "peace-hand scatter pop";
    // ✌・ランダム配置・ポンッと出る、の3つのclassを付ける
    copy.textContent = "✌";
    // 中身を✌にする
    copy.style.left = Math.random() * 90 + "vw";
    // 横の位置を0〜90%の間でランダムに決める
    copy.style.top = Math.random() * 90 + "vh";
    // 縦の位置も同じようにランダムに決める
    document.body.appendChild(copy);
    // bodyの最後に入れて画面に出す
  }
});

const header = document.querySelector("header");
// ヘッダーを取ってくる
const menu = document.querySelector(".site-menu");
// メニュー（detailsタグ）を取ってくる
let lastY = window.scrollY;
// 前回のスクロール位置を覚えておく箱

window.addEventListener("scroll", function () {
  // スクロールするたびに動く
  const nowY = window.scrollY;
  // 今のスクロール位置

  if (menu.open) {
    // メニューが開いている間は
    lastY = nowY;
    return;
    // ヘッダーを隠さない（閉じるボタンが消えるのを防ぐ）
  }

  if (nowY > lastY && nowY > 80) {
    // 下にスクロール中で、少し下まで来ていたら
    header.classList.add("is-hidden");
    // 隠す
  } else {
    // 上にスクロールしたら
    header.classList.remove("is-hidden");
    // 出す
  }

  lastY = nowY;
  // 今の位置を「前回」として覚える
});

const summary = menu.querySelector("summary");
// MENUボタン（summaryタグ）を取ってくる
let closeTimer;
// 閉じる予約を覚えておく箱

summary.addEventListener("click", function (e) {
  e.preventDefault();
  // detailsの標準の開閉を止める（自分で動かすため）
  clearTimeout(closeTimer);
  // 閉じる予約が残っていたら取り消す

  if (!menu.classList.contains("is-open")) {
    // 閉じている時は
    menu.open = true;
    // まず中身を表示する
    menu.offsetWidth;
    // 一度描画させる（これがないと動きが出ない）
    menu.classList.add("is-open");
    // 開いた印を付ける（CSSが動き出す）
  } else {
    // 開いている時は
    menu.classList.remove("is-open");
    // 印を外す（右へ戻る動きが始まる）
    closeTimer = setTimeout(function () {
      menu.open = false;
    }, 400);
    // 動き終わる0.4秒後に、detailsを閉じる
  }
});

menu.querySelectorAll("a").forEach(function (link) {
  // メニューの中のリンクを1つずつ取り出す
  link.addEventListener("click", function () {
    // リンクを押した時に
    menu.classList.remove("is-open");
    // 開いた印を外す（右へ戻る動きが始まる）
    closeTimer = setTimeout(function () {
      menu.open = false;
    }, 400);
    // 動き終わる0.4秒後に、detailsを閉じる
  });
});