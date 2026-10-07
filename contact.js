const form = document.getElementById("contact-form");
const errorText = document.getElementById("error");
const thanks = document.getElementById("thanks");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const body = document.getElementById("body").value;

  if (name === "" || email === "" || body === "") {
    errorText.textContent = "すべて入力してください";
  } else if (!email.includes("@")) {
    errorText.textContent = "メールアドレスの形式が正しくありません";
  } else {
    errorText.textContent = "";
    form.style.display = "none";
    thanks.innerHTML = "送信ありがとうございました<br>※架空の会社なので実際には送信はされません";
  }
});