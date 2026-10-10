const shareholders = [
  { name: "ひろあき", shares: 500 },
  { name: "がんばりピース", shares: 400 },
  { name: "smilehappy", shares: 200 },
  { name: "拾ったお金", shares: 198 },
  { name: "おとぎ", shares: 100 },
  { name: "その他", shares: 2 },
];

const list = document.getElementById("holder-list");
// 一覧を出す場所（ulタグ）を取ってくる

if (list) {
  // このページにだけ動かす
  const sum = shareholders.reduce(function (acc, h) {
    return acc + h.shares;
  }, 0);
  // 全員の持株を足して、合計を出す

  const sorted = shareholders.slice().sort(function (a, b) {
    return b.shares - a.shares;
  });
  // 持株の多い順に並べ替える

  sorted.forEach(function (h) {
    const percent = ((h.shares / sum) * 100).toFixed(1);
    // 持株の割合（％）を、小数第1位まで出す
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="role">${percent}%</span>
      <span class="person">${h.name}</span>
    `;
    list.appendChild(li);
    // 1人ぶんを作って、一覧に入れる
  });

  const colors = ["#2c5aa0", "#4a90e2", "#9ec5f4", "#f5a623", "#7ed6a5", "#e57373"];
  // グラフの色を順番に決めておく
  let start = 0;
  // 今どこまで塗ったか（％）
  const parts = [];
  // 色の指定を入れる箱

  sorted.forEach(function (h, i) {
    const end = start + (h.shares / sum) * 100;
    // この人の分を塗り終わる位置
    parts.push(colors[i % colors.length] + " " + start + "% " + end + "%");
    // 「色 開始% 終了%」の形で箱に入れる
        const pct = (h.shares / sum) * 100;
    // この人の割合（％）
    if (pct >= 3) {
      // 3%以上の人だけラベルを付ける（小さいと重なるため）
      const mid = ((start + end) / 2) * 3.6;
      // 扇の真ん中の角度。％を角度にするため3.6倍する（100% = 360度）
      const rad = (mid * Math.PI) / 180;
      // 角度を、sin/cosが使えるラジアンに直す
      const x = Math.sin(rad) * 75;
      const y = -Math.cos(rad) * 75;
      // 円の中心から75pxの位置を計算する（yは上が正なのでマイナスを付ける）
      const label = document.createElement("span");
      label.className = "chart-label";
      // ラベルの span を作る
      label.style.transform = "translate(-50%, -50%) translate(" + x + "px, " + y + "px)";
      // 中心に置いてから、計算した位置へずらす
      label.innerHTML = h.name + "<br>" + pct.toFixed(1) + "%";
      // 名前と％を2行で入れる
      document.getElementById("holder-chart").appendChild(label);
      // 円グラフの中に入れる
    }
    
    start = end;
    // 次の人は、ここから塗る
  });

  document.getElementById("holder-chart").style.background =
    "conic-gradient(" + parts.join(",") + ")";
  // 円を塗り分けて、グラフにする

  list.querySelectorAll("li").forEach(function (li, i) {
    li.style.borderLeft = "8px solid " + colors[i % colors.length];
    // 一覧の左に、グラフと同じ色の線を付ける
  });
}