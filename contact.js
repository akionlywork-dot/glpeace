function dopost(e) {
  const endpoint = https://formspree.io/f/xvkzaqrk
  gmailapp.sendEmail(
    "あなたのメールアドレス", // 送信先のメールアドレス
    "お問い合わせ", // 件名
    "メール" + data.email + "\n\n" + data.message // 本文
  );
  return ContentService.createTextOutput("success");
}