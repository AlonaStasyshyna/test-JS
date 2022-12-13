// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const itemOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", itemOfCategories.length);

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

itemOfCategories.forEach(function (item) {
  const titleOfCategory = item.querySelector("h2");
  console.log(`Category: ${titleOfCategory.textContent}`);

  const elementsOfCategory = item.querySelectorAll("li");
  console.log(`Elements: ${elementsOfCategory.length}`);
});
