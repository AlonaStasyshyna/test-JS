function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const changeColorTxt = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  changeColorTxt.textContent = color;
});
