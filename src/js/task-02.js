const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const addItemsToListOfIngredients = (ingredients) => {
  document.querySelector("#ingredients").append(
    ...ingredients.map((ingredient) => {
      const itemOfIngredients = document.createElement("li");
      itemOfIngredients.classList.add("item");
      itemOfIngredients.textContent = ingredient;
      return itemOfIngredients;
    })
  );
};

addItemsToListOfIngredients(ingredients);
