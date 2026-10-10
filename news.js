const newsData = [
  { date: "2026.10.10", title: "社長のあいさつを掲載しました", detail: "社長のあいさつを掲載しました。ぜひ一度読んでみてください" },
  { date: "2026.10.10", title: "社員インタビューを公開しました", detail: "3人の社員のインタビューを公開しました。ぜひ読んでみてね！" },
  { date: "2026.10.10", title: "社員募集を開始しました", detail: "ピース応援スタッフなど7職種を募集します。応募は専用ページからどうぞ。" },
  { date: "2026.10.09", title: "結構アプデした", detail: "背景や動きなどを結構アップデートして本格的になってきたと思います。あと隠し要素作ったのでぜひ探してみてね！" },
  { date: "2026.10.09", title: "資本金横領事件について", detail: "本日未明、株式会社がんばりピースの資本金が社長により横領されたことが確認されました。今後の方針と対応について、改めて後日ご報告させていただきます。" , important: true },
  { date: "2026.10.09", title: "「smilehappy」emonga氏との公開懇談会について", detail: "記者募集中らしいです。詳しくはかじーまで" },
  { date: "2026.10.09", title: "お問い合わせフォーム実用化", detail: "普通にまじでメール届くようになったので試してみていいよ 迷惑メールは許しません" },
  { date: "2026.10.08", title: "ここにきてウェブサイトが社長に認知される", detail: "それでも自分の会社ですかほんとに" },
  { date: "2026.10.08", title: "採用情報ページの開設", detail: "求人採用は現在受け付けておりません" },
  { date: "2026.10.08", title: "一部バグの修正", detail: "不具合が修正されました。ご不便をおかけしました。" },
  { date: "2026.10.07", title: "ウェブサイトの表示バグについて", detail: "お手数ですが、直接ご連絡いただけますと幸いです。" },
  { date: "2026.10.07", title: "社訓一般公開", detail: "社訓が一般公開されました。ぜひご確認ください。" },
  { date: "2026.10.07", title: "かじー社長による対抗会社「smilehappy」に宣戦布告", detail: "かじー社長が対抗会社「smilehappy」(emongaさん)に宣戦布告しました。" },
  { date: "2026.10.07", title: "ウェブサイト開設", detail: "" },
  { date: "2026.10.07", title: "会社設立", detail: "" }
];

const newsList = document.getElementById("news-list");
// ニュースを出す場所（ulタグ）を取ってくる

if (newsList) {
  // その場所があるページだけ動かす
  const limit = Number(newsList.dataset.limit) || newsData.length;
  // data-limit の数字を読む。なければ全件
  const isTop = Boolean(newsList.dataset.limit);
  // data-limit があるのはトップページ

  newsData.slice(0, limit).forEach(function (item) {
    // 先頭から limit 件を、1件ずつ取り出す
    const li = document.createElement("li");
    // 新しい li を作る

    const date = document.createElement("span");
    date.className = "date";
    date.textContent = item.date;
    li.appendChild(date);
    // 日付の span を作って li に入れる

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = item.title;
    li.appendChild(title);
    // 題名の span を作って li に入れる

    if (isTop) {
  // トップページなら
  if (item.important) {
    // 重要の印がある時だけ
    const link = document.createElement("a");
    link.className = "news-link";
    link.href = "news-detail.html";
    link.textContent = "詳しくはこちら";
    li.appendChild(link);
    // 「詳しくはこちら」のリンクを作って li に入れる
  }
} else if (item.detail) {
  // 一覧ページで、本文がある時は
  const detail = document.createElement("span");
  detail.className = "detail";
  detail.textContent = item.detail;
  li.appendChild(detail);
  // 本文を作って li に入れる
}

    newsList.appendChild(li);
    // できた li を ul に入れて、画面に出す
  });
}
// ニュースのデータ。新しいものを一番上に足していく