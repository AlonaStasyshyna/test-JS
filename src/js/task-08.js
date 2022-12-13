// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");
const alertMessage = document.createElement("p");
alertMessage.textContent = "Увага! Всі поля форми повинні бути заповнені";

loginForm.addEventListener("submit", getDataFromForm);

function getDataFromForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email === "" || password === "") {
    return loginForm.append(alertMessage);
  }

  alertMessage.remove();
  console.log(formData);
  loginForm.reset();
}

alertMessage.style.color = "red";
alertMessage.style.fontSize = "14px";
